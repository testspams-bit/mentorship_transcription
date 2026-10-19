import JSZip from 'jszip';
import { AudioSegment } from '../types/audio';
import { parseAudioFilename, parseTimeToSeconds, inferSubject } from './parser';
import { saveAudioBlob } from './audioStorage';

export interface ProcessResult {
  segments: AudioSegment[];
  totalFilesFound: number;
  audioCount: number;
  matchedCount: number;
  newCount: number;
  extractedNames: string[];
}

export async function processZipFile(
  zipFile: File,
  existingSegments: AudioSegment[]
): Promise<ProcessResult> {
  const zip = new JSZip();
  const loadedZip = await zip.loadAsync(zipFile);
  
  const extractedFiles: { name: string; file: JSZip.JSZipObject }[] = [];
  loadedZip.forEach((relativePath, file) => {
    if (!file.dir && !relativePath.startsWith('__MACOSX') && !relativePath.includes('/.')) {
      extractedFiles.push({ name: relativePath, file });
    }
  });

  const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
  const textExtensions = ['.txt', '.srt', '.vtt', '.json'];

  const audioFiles = extractedFiles.filter(f =>
    audioExtensions.some(ext => f.name.toLowerCase().endsWith(ext))
  );

  const textFiles = extractedFiles.filter(f =>
    textExtensions.some(ext => f.name.toLowerCase().endsWith(ext))
  );

  // Read text files into a map for fast lookup
  const transcriptMap: Record<string, string> = {};
  for (const tFile of textFiles) {
    try {
      const textContent = await tFile.file.async('text');
      const baseName = tFile.name.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
      transcriptMap[baseName.toLowerCase()] = textContent;
    } catch {
      // ignore
    }
  }

  // Work on a copy of existing segments
  const segmentsMap = new Map<string, AudioSegment>();
  existingSegments.forEach(seg => {
    segmentsMap.set(seg.serialNumber.toLowerCase(), { ...seg });
    segmentsMap.set(seg.rawFilename.toLowerCase(), { ...seg });
    segmentsMap.set(seg.label.toLowerCase(), { ...seg });
  });

  let matchedCount = 0;
  let newCount = 0;
  const updatedSegments = [...existingSegments];
  const extractedNames: string[] = [];

  for (const aFile of audioFiles) {
    const rawFileName = aFile.name.split('/').pop() || aFile.name;
    extractedNames.push(rawFileName);

    const blob = await aFile.file.async('blob');
    const audioUrl = URL.createObjectURL(blob);
    const parsed = parseAudioFilename(rawFileName);
    const baseName = rawFileName.replace(/\.[^/.]+$/, '').toLowerCase();

    // Look for transcript text if present in zip
    const companionTranscript = transcriptMap[baseName] || '';

    // Check if matches an existing preloaded segment by serial or filename or label
    let matchedIndex = -1;
    if (parsed.serialNumber) {
      matchedIndex = updatedSegments.findIndex(
        s =>
          s.serialNumber.replace('_', '').replace('.', '') === parsed.serialNumber?.replace('_', '').replace('.', '') ||
          s.rawFilename.toLowerCase() === rawFileName.toLowerCase() ||
          s.label.toLowerCase() === (parsed.label || '').toLowerCase()
      );
    }

    if (matchedIndex !== -1) {
      // Update existing segment with real audio
      updatedSegments[matchedIndex] = {
        ...updatedSegments[matchedIndex],
        audioBlobUrl: audioUrl,
        isUploadedAudio: true,
        fileSize: (blob.size / (1024 * 1024)).toFixed(2) + ' MB',
        fullTranscriptText: companionTranscript || updatedSegments[matchedIndex].fullTranscriptText,
      };
      matchedCount++;

      // Save to IndexedDB persistently
      saveAudioBlob(updatedSegments[matchedIndex].id, blob);
      saveAudioBlob(rawFileName, blob);
      if (parsed.serialNumber) {
        saveAudioBlob(parsed.serialNumber, blob);
      }
    } else {
      // Create new segment
      const durationSeconds = (parsed.endSeconds || 0) - (parsed.startSeconds || 0);
      const newSeg: AudioSegment = {
        id: 'user-seg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        serialNumber: parsed.serialNumber || '00',
        rawFilename: rawFileName,
        startTime: parsed.startTime || '00:00',
        endTime: parsed.endTime || '00:00',
        startSeconds: parsed.startSeconds || 0,
        endSeconds: parsed.endSeconds || 0,
        durationFormatted: parsed.durationFormatted || '00:00',
        label: parsed.label || rawFileName,
        title: parsed.title || rawFileName,
        subject: parsed.subject || 'Coaching & Mentorship',
        primaryTag: '#' + (parsed.title || 'recording').toLowerCase().split(' ').slice(0, 2).join(' '),
        tags: parsed.tags || ['User Upload'],
        summary: `Audio clip: ${parsed.title || rawFileName}. Duration: ${parsed.durationFormatted || 'Custom duration'}.`,
        keyTakeaways: [
          `File: ${rawFileName}`,
          `Segment Time: ${parsed.startTime} to ${parsed.endTime}`,
          `Subject: ${parsed.subject || 'General'}`,
        ],
        transcriptLines: companionTranscript
          ? parseTextToTranscriptLines(companionTranscript, parsed.startSeconds || 0)
          : [
              {
                start: parsed.startTime || '00:00',
                end: parsed.endTime || '00:00',
                startSec: 0,
                endSec: durationSeconds,
                speaker: 'General',
                text: 'Transcript pending or user audio uploaded.',
              },
            ],
        fullTranscriptText: companionTranscript || 'User audio file uploaded. Use the audio player on the right to listen.',
        audioBlobUrl: audioUrl,
        isUploadedAudio: true,
        fileSize: (blob.size / (1024 * 1024)).toFixed(2) + ' MB',
      };

      updatedSegments.push(newSeg);
      newCount++;
    }
  }

  // Sort by serial number or start time
  updatedSegments.sort((a, b) => a.startSeconds - b.startSeconds);

  return {
    segments: updatedSegments,
    totalFilesFound: extractedFiles.length,
    audioCount: audioFiles.length,
    matchedCount,
    newCount,
    extractedNames,
  };
}

export async function processAudioFiles(
  files: File[],
  existingSegments: AudioSegment[]
): Promise<ProcessResult> {
  const updatedSegments = [...existingSegments];
  let matchedCount = 0;
  let newCount = 0;
  const extractedNames: string[] = [];

  for (const file of files) {
    const rawFileName = file.name;
    extractedNames.push(rawFileName);
    const audioUrl = URL.createObjectURL(file);
    const parsed = parseAudioFilename(rawFileName);

    let matchedIndex = -1;
    if (parsed.serialNumber) {
      matchedIndex = updatedSegments.findIndex(
        s =>
          s.serialNumber.replace('_', '').replace('.', '') === parsed.serialNumber?.replace('_', '').replace('.', '') ||
          s.rawFilename.toLowerCase() === rawFileName.toLowerCase() ||
          s.label.toLowerCase() === (parsed.label || '').toLowerCase()
      );
    }

    if (matchedIndex !== -1) {
      updatedSegments[matchedIndex] = {
        ...updatedSegments[matchedIndex],
        audioBlobUrl: audioUrl,
        isUploadedAudio: true,
        fileSize: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      };
      matchedCount++;

      saveAudioBlob(updatedSegments[matchedIndex].id, file);
      saveAudioBlob(rawFileName, file);
      if (parsed.serialNumber) {
        saveAudioBlob(parsed.serialNumber, file);
      }
    } else {
      const durationSeconds = (parsed.endSeconds || 0) - (parsed.startSeconds || 0);
      const newSeg: AudioSegment = {
        id: 'user-seg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        serialNumber: parsed.serialNumber || '00',
        rawFilename: rawFileName,
        startTime: parsed.startTime || '00:00',
        endTime: parsed.endTime || '00:00',
        startSeconds: parsed.startSeconds || 0,
        endSeconds: parsed.endSeconds || 0,
        durationFormatted: parsed.durationFormatted || '00:00',
        label: parsed.label || rawFileName,
        title: parsed.title || rawFileName,
        subject: parsed.subject || 'Coaching & Mentorship',
        primaryTag: '#' + (parsed.title || 'recording').toLowerCase().split(' ').slice(0, 2).join(' '),
        tags: parsed.tags || ['User Upload'],
        summary: `Audio clip: ${parsed.title || rawFileName}.`,
        keyTakeaways: [
          `File: ${rawFileName}`,
          `Time Range: ${parsed.startTime} - ${parsed.endTime}`,
        ],
        transcriptLines: [
          {
            start: parsed.startTime || '00:00',
            end: parsed.endTime || '00:00',
            startSec: 0,
            endSec: durationSeconds,
            speaker: 'General',
            text: 'Uploaded audio ready for playback.',
          },
        ],
        fullTranscriptText: 'Audio file loaded directly from system.',
        audioBlobUrl: audioUrl,
        isUploadedAudio: true,
        fileSize: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      };
      updatedSegments.push(newSeg);
      newCount++;
    }
  }

  updatedSegments.sort((a, b) => a.startSeconds - b.startSeconds);

  return {
    segments: updatedSegments,
    totalFilesFound: files.length,
    audioCount: files.length,
    matchedCount,
    newCount,
    extractedNames,
  };
}

function parseTextToTranscriptLines(text: string, baseOffsetSec: number) {
  const lines = text.split('\n');
  const result = [];
  const timeRegex = /\[([0-9]{1,2}:[0-9]{2}(?::[0-9]{2})?)\s*[-–]\s*([0-9]{1,2}:[0-9]{2}(?::[0-9]{2})?)\]\s*(.*)/;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const match = trimmed.match(timeRegex);
    if (match) {
      const startStr = match[1];
      const endStr = match[2];
      const lineText = match[3];
      const sSec = parseTimeToSeconds(startStr);
      const eSec = parseTimeToSeconds(endStr);
      result.push({
        start: startStr,
        end: endStr,
        startSec: sSec,
        endSec: eSec,
        speaker: 'General' as const,
        text: lineText,
      });
    }
  }

  if (result.length === 0) {
    result.push({
      start: '00:00',
      end: '00:00',
      startSec: baseOffsetSec,
      endSec: baseOffsetSec + 60,
      speaker: 'General' as const,
      text,
    });
  }
  return result;
}

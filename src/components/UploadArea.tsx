import React, { useState, useRef } from 'react';
import {
  Upload,
  Archive,
  FileAudio,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { AudioSegment } from '../types/audio';
import { processZipFile, processAudioFiles, ProcessResult } from '../utils/zipHandler';

interface UploadAreaProps {
  existingSegments: AudioSegment[];
  onUploadSuccess: (newSegments: AudioSegment[], result: ProcessResult) => void;
}

export const UploadArea: React.FC<UploadAreaProps> = ({
  existingSegments,
  onUploadSuccess,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastResult, setLastResult] = useState<ProcessResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError(null);
    setIsProcessing(true);
    setStatusMessage('Reading uploaded files...');

    try {
      const fileArray = Array.from(files);
      const zipFile = fileArray.find(f => f.name.toLowerCase().endsWith('.zip'));

      let result: ProcessResult;

      if (zipFile) {
        setStatusMessage(`Unpacking ZIP archive "${zipFile.name}" with JSZip...`);
        result = await processZipFile(zipFile, existingSegments);
      } else {
        const audioFiles = fileArray.filter(f =>
          /\.(mp3|wav|ogg|m4a|aac)$/i.test(f.name)
        );
        if (audioFiles.length === 0) {
          throw new Error('Please select a .zip archive or audio files (.mp3, .wav, .m4a).');
        }
        setStatusMessage(`Processing ${audioFiles.length} audio file(s)...`);
        result = await processAudioFiles(audioFiles, existingSegments);
      }

      setLastResult(result);
      setStatusMessage(
        `Success! Unpacked ${result.audioCount} audio files (${result.matchedCount} matched existing segments, ${result.newCount} new).`
      );
      onUploadSuccess(result.segments, result);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to process files. Please verify the archive format.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Archive className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Upload ZIP Archive or Audio Files
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Accepts <code className="text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-xs">.zip</code> archives containing your segmented MP3s, or drop audio files directly.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/60 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
          <Info className="w-4 h-4 text-indigo-500 shrink-0" />
          <span>Auto-detects: <span className="font-mono text-slate-700 dark:text-slate-300">02_00-03-00_to_00-07-00_Label.mp3</span></span>
        </div>
      </div>

      {/* Drag & Drop Box */}
      <div
        onDragOver={e => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          isDragging
            ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 scale-[0.99]'
            : 'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 bg-slate-50/50 dark:bg-slate-950/40'
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={e => handleFiles(e.target.files)}
          accept=".zip,.mp3,.wav,.ogg,.m4a,.aac"
          multiple
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-inner">
            {isProcessing ? (
              <Loader2 className="w-7 h-7 animate-spin" />
            ) : (
              <Upload className="w-7 h-7" />
            )}
          </div>

          <div>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">
              {isProcessing
                ? statusMessage
                : 'Drop your audio ZIP file or MP3s here'}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Supports .zip, .mp3, .wav, .m4a with automatic serial &amp; time categorization
            </p>
          </div>

          {!isProcessing && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 shadow-sm transition"
              >
                Browse Files from Computer
              </button>
              <button
                type="button"
                onClick={async (e) => {
                  e.stopPropagation();
                  setIsProcessing(true);
                  setStatusMessage('Generating demo ZIP package with audio clips...');
                  try {
                    const { createDemoZipArchive } = await import('../utils/audioBlobGenerator');
                    const zipBlob = await createDemoZipArchive();
                    const demoFile = new File([zipBlob], 'NEET_Mentorship_Demo_Audio.zip', {
                      type: 'application/zip',
                    });
                    const res = await processZipFile(demoFile, existingSegments);
                    setLastResult(res);
                    setStatusMessage(`Success! Demo audio package extracted (${res.matchedCount} audio tracks loaded).`);
                    onUploadSuccess(res.segments, res);
                  } catch (err: any) {
                    setError(err?.message || 'Failed to generate demo zip');
                  } finally {
                    setIsProcessing(false);
                  }
                }}
                className="px-3.5 py-2 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Load Sample ZIP Audio Pack</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Status Notifications */}
      {error && (
        <div className="mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
          <span>{error}</span>
        </div>
      )}

      {lastResult && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <p className="font-semibold">
                Processed {lastResult.audioCount} audio files successfully!
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                {lastResult.matchedCount} audio clips linked to preloaded transcripts, {lastResult.newCount} new tracks cataloged.
              </p>
            </div>
          </div>
          <button
            onClick={() => setLastResult(null)}
            className="self-end sm:self-center text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
};

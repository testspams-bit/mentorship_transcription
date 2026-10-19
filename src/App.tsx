import React, { useState, useEffect, useMemo } from 'react';
import {
  Headphones,
  Upload,
  Search,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  FastForward,
  Rewind,
  X
} from 'lucide-react';
import { AudioSegment, PlaybackState } from './types/audio';
import { PRELOADED_SEGMENTS } from './data/preloadedSegments';
import { AudioItemCard } from './components/AudioItemCard';
import { audioPlayer } from './utils/audioPlayerManager';
import { processZipFile, processAudioFiles } from './utils/zipHandler';

export default function App() {
  const [segments, setSegments] = useState<AudioSegment[]>(PRELOADED_SEGMENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadNote, setUploadNote] = useState<string | null>(null);

  const [playbackState, setPlaybackState] = useState<PlaybackState>({
    currentSegmentId: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1.0,
    isMuted: false,
    activeLineIndex: 0,
  });

  useEffect(() => {
    const unsubscribe = audioPlayer.subscribe(state => {
      setPlaybackState(state);
    });

    // Check IndexedDB for previously uploaded recordings
    import('./utils/audioStorage').then(({ getAllStoredAudios }) => {
      getAllStoredAudios().then(stored => {
        const keys = Object.keys(stored);
        if (keys.length > 0) {
          setSegments(prev =>
            prev.map(seg => {
              const matchingBlob =
                stored[seg.id.toLowerCase()] ||
                stored[seg.rawFilename.toLowerCase()] ||
                stored[seg.serialNumber.toLowerCase()];

              if (matchingBlob) {
                return {
                  ...seg,
                  audioBlobUrl: URL.createObjectURL(matchingBlob),
                  isUploadedAudio: true,
                };
              }
              return seg;
            })
          );
        }
      });
    });

    return () => unsubscribe();
  }, []);

  const currentSegment = useMemo(() => {
    if (!playbackState.currentSegmentId) return null;
    return segments.find(s => s.id === playbackState.currentSegmentId) || null;
  }, [playbackState.currentSegmentId, segments]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsUploading(true);
    setUploadNote('Processing files...');

    try {
      const fileArray = Array.from(files);
      const zipFile = fileArray.find(f => f.name.toLowerCase().endsWith('.zip'));

      let res;
      if (zipFile) {
        setUploadNote(`Unpacking ${zipFile.name}...`);
        res = await processZipFile(zipFile, segments);
      } else {
        res = await processAudioFiles(fileArray, segments);
      }

      setSegments(res.segments);
      setUploadNote(`Loaded ${res.audioCount} audio files.`);
      setTimeout(() => setUploadNote(null), 4000);
    } catch (err: any) {
      setUploadNote(`Error: ${err.message || 'Failed to upload'}`);
    } finally {
      setIsUploading(false);
    }
  };

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredSegments = useMemo(() => {
    let list = segments;

    // Tag filter
    if (selectedTag) {
      list = list.filter(
        s => s.primaryTag?.toLowerCase() === selectedTag.toLowerCase()
      );
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.rawFilename.toLowerCase().includes(q) ||
          s.serialNumber.toLowerCase().includes(q) ||
          s.fullTranscriptText.toLowerCase().includes(q) ||
          s.primaryTag?.toLowerCase().includes(q)
      );
    }

    return list;
  }, [segments, selectedTag, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-28">
      {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                NEET Audio Recordings
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                21 Audio Recordings &amp; Actual Transcripts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-xs font-semibold transition">
              <Upload className="w-3.5 h-3.5" />
              <span>{isUploading ? 'Uploading...' : 'Upload ZIP / Audio'}</span>
              <input
                type="file"
                accept=".zip,.mp3,.wav,.m4a"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 pt-6 space-y-4">
        {/* Upload Status Banner */}
        {uploadNote && (
          <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
            <span>{uploadNote}</span>
            <button onClick={() => setUploadNote(null)}>
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search within recordings or transcripts..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Audio Source Status Notice */}
        {segments.some(s => s.isUploadedAudio) ? (
          <div className="px-4 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
            <span>
              ✓ <strong>Original recordings loaded:</strong> Playing your actual audio files directly on each card.
            </span>
          </div>
        ) : (
          <div className="px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>
              ℹ️ Currently in <strong>speech preview mode</strong>. To play your <strong>actual voice recordings</strong>, click <strong>"Upload ZIP / Audio"</strong> above and select your ZIP or MP3 files.
            </span>
          </div>
        )}

        {/* 21 Tags Filter Section (Above 21 Cards, small fonts, max 2 words each) */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Filter by Tag ({selectedTag ? `1 active: ${selectedTag}` : '21 Tags'})
            </span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Reset Filter (Show All 21)
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors border ${
                selectedTag === null
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white font-bold'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              #all
            </button>
            {[
              '#test anxiety',
              '#ncert biology',
              '#botany faculty',
              '#dipole calculus',
              '#assertion reason',
              '#tissues organs',
              '#physics derivations',
              '#test design',
              '#time management',
              '#cbt mode',
              '#redox chemistry',
              '#capacitors doubt',
              '#series parallel',
              '#graph questions',
              '#isomerism struggles',
              '#ms chouhan',
              '#topic booster',
              '#batch pacing',
              '#rank target',
              '#pyq focus',
              '#daily schedule',
            ].map(tag => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`px-2 py-0.5 rounded text-xs font-mono transition-colors border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* 21 Cards List */}
        <div className="space-y-3">
          {filteredSegments.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No recordings matching "{selectedTag || searchQuery}"
            </div>
          ) : (
            filteredSegments.map(segment => (
              <AudioItemCard
                key={segment.id}
                segment={segment}
                playbackState={playbackState}
                onSelectTag={tag => setSelectedTag(selectedTag === tag ? null : tag)}
              />
            ))
          )}
        </div>
      </main>

      {/* Bottom Sticky Player if a track is active */}
      {currentSegment && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 shadow-lg">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
              <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                #{currentSegment.serialNumber}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                  {currentSegment.title}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {currentSegment.startTime} - {currentSegment.endTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => audioPlayer.skip(-10)}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                title="Rewind 10s"
              >
                <Rewind className="w-4 h-4" />
              </button>

              <button
                onClick={() => audioPlayer.togglePlay()}
                className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
              >
                {playbackState.isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={() => audioPlayer.skip(10)}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                title="Forward 10s"
              >
                <FastForward className="w-4 h-4" />
              </button>

              <select
                value={playbackState.playbackRate}
                onChange={e => audioPlayer.setRate(parseFloat(e.target.value))}
                className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                <option value="0.75">0.75x</option>
                <option value="1.0">1.0x</option>
                <option value="1.25">1.25x</option>
                <option value="1.5">1.5x</option>
                <option value="2.0">2.0x</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

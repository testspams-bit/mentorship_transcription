import React, { useState, useEffect, useMemo } from 'react';
import {
  Headphones,
  Link2,
  Search,
  Upload,
  Play,
  Pause,
  FastForward,
  Rewind,
  Loader2,
  Check,
  X,
  Volume2,
  VolumeX
} from 'lucide-react';
import { AudioSegment, PlaybackState } from './types/audio';
import { PRELOADED_SEGMENTS } from './data/preloadedSegments';
import { AudioItemCard } from './components/AudioItemCard';
import { audioPlayer } from './utils/audioPlayerManager';
import { downloadFromMegaUrl, MegaDownloadProgress } from './utils/megaDownloader';
import { saveAudioBlob, getAudioBlob } from './utils/audioStorage';
import { processZipFile, processAudioFiles } from './utils/zipHandler';

export default function App() {
  const [segments, setSegments] = useState<AudioSegment[]>(PRELOADED_SEGMENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // MEGA URL & Download state
  const [megaUrl, setMegaUrl] = useState('');
  const [isMegaDownloading, setIsMegaDownloading] = useState(false);
  const [megaProgress, setMegaProgress] = useState<MegaDownloadProgress | null>(null);
  const [megaError, setMegaError] = useState<string | null>(null);
  const [hasMasterAudio, setHasMasterAudio] = useState(false);
  const [masterFilename, setMasterFilename] = useState<string | null>(null);

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

    // Check if master audio was saved in IndexedDB from a previous MEGA download
    getAudioBlob('master_mega_recording').then(blob => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        audioPlayer.setMasterAudio(url);
        setHasMasterAudio(true);
        setMasterFilename('Cached Master Recording');
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle MEGA download of the entire file at once
  const handleDownloadMega = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!megaUrl.trim()) return;

    setIsMegaDownloading(true);
    setMegaError(null);

    try {
      const { blob, filename } = await downloadFromMegaUrl(megaUrl, progress => {
        setMegaProgress(progress);
      });

      const audioUrl = URL.createObjectURL(blob);
      audioPlayer.setMasterAudio(audioUrl);
      setHasMasterAudio(true);
      setMasterFilename(filename);

      // Save to IndexedDB persistently
      await saveAudioBlob('master_mega_recording', blob);
      await saveAudioBlob(filename, blob);

      setMegaProgress(null);
    } catch (err: any) {
      console.error(err);
      setMegaError(err?.message || 'Failed to download or decrypt from MEGA URL. Check link permissions.');
    } finally {
      setIsMegaDownloading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const firstAudio = fileArray.find(f => /\.(mp3|wav|m4a|ogg)$/i.test(f.name));
    const zipFile = fileArray.find(f => f.name.toLowerCase().endsWith('.zip'));

    if (zipFile) {
      const res = await processZipFile(zipFile, segments);
      setSegments(res.segments);
    } else if (firstAudio) {
      const audioUrl = URL.createObjectURL(firstAudio);
      audioPlayer.setMasterAudio(audioUrl);
      setHasMasterAudio(true);
      setMasterFilename(firstAudio.name);
      await saveAudioBlob('master_mega_recording', firstAudio);
    }
  };

  const currentSegment = useMemo(() => {
    if (!playbackState.currentSegmentId) return null;
    return segments.find(s => s.id === playbackState.currentSegmentId) || null;
  }, [playbackState.currentSegmentId, segments]);

  // Extract all 24 distinct tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    segments.forEach(s => {
      if (s.primaryTag) tagsSet.add(s.primaryTag);
    });
    return Array.from(tagsSet);
  }, [segments]);

  const filteredSegments = useMemo(() => {
    let list = segments;

    if (selectedTag) {
      list = list.filter(
        s => s.primaryTag?.toLowerCase() === selectedTag.toLowerCase()
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        s =>
          s.title.toLowerCase().includes(q) ||
          s.rawFilename.toLowerCase().includes(q) ||
          s.serialNumber.toLowerCase().includes(q) ||
          s.primaryTag?.toLowerCase().includes(q) ||
          s.fullTranscriptText.toLowerCase().includes(q)
      );
    }

    return list;
  }, [segments, selectedTag, searchQuery]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-24 font-sans">
      {/* Minimal Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              <Headphones className="w-3.5 h-3.5" />
            </div>
            <h1 className="text-sm font-bold text-slate-900 dark:text-white">
              NEET Recordings ({segments.length} Cards)
            </h1>
          </div>

          {/* Quick upload fallback option */}
          <label className="cursor-pointer text-xs text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium flex items-center gap-1">
            <Upload className="w-3 h-3" />
            <span>Load Local File</span>
            <input
              type="file"
              accept=".zip,.mp3,.wav,.m4a"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-4 space-y-3.5">
        {/* MEGA Share Link Input (Downloads entire URL at once) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm space-y-2">
          <form onSubmit={handleDownloadMega} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Link2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                placeholder="Paste MEGA share link (e.g. https://mega.nz/file/...#...)"
                value={megaUrl}
                onChange={e => setMegaUrl(e.target.value)}
                disabled={isMegaDownloading}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isMegaDownloading || !megaUrl.trim()}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 transition"
            >
              {isMegaDownloading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Downloading MEGA...</span>
                </>
              ) : (
                <span>Download Entire URL</span>
              )}
            </button>
          </form>

          {/* MEGA Status & Feedback */}
          {megaProgress && (
            <div className="text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <Loader2 className="w-3 h-3 animate-spin shrink-0" />
              <span>{megaProgress.status}</span>
            </div>
          )}

          {megaError && (
            <div className="text-xs text-rose-600 dark:text-rose-400">
              {megaError}
            </div>
          )}

          {hasMasterAudio && (
            <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>
                Master audio connected ({masterFilename || 'Original file'}). Cards will play only their labeled section.
              </span>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search within recordings or transcripts..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* 24 Distinct Tags Filter (Small fonts, max 2 words each) */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
            <span>Tags ({allTags.length})</span>
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-indigo-600 dark:text-indigo-400 hover:underline capitalize"
              >
                Clear Tag Filter
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors border ${
                selectedTag === null
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400'
              }`}
            >
              #all
            </button>

            {allTags.map(tag => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-indigo-400 hover:text-indigo-600'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* The 24 Small Cards: Only one title, one play icon, one transcript icon */}
        <div className="space-y-2">
          {filteredSegments.length === 0 ? (
            <div className="text-center py-8 text-slate-500 text-xs">
              No cards matching filter
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

      {/* Basic Bottom Audio Player */}
      {currentSegment && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-t border-slate-200 dark:border-slate-800 px-4 py-2.5 shadow-md">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400">
                #{currentSegment.serialNumber}
              </span>
              <p className="text-xs font-medium text-slate-900 dark:text-white truncate">
                {currentSegment.title}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-slate-500">
                {formatTime(playbackState.currentTime)} / {formatTime(playbackState.duration)}
              </span>

              <button
                onClick={() => audioPlayer.togglePlay()}
                className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
              >
                {playbackState.isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

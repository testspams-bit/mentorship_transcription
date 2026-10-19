import React from 'react';
import {
  Play,
  Pause,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AudioSegment, PlaybackState } from '../types/audio';
import { audioPlayer } from '../utils/audioPlayerManager';

interface GlobalAudioPlayerProps {
  currentSegment: AudioSegment | null;
  playbackState: PlaybackState;
  onNextTrack?: () => void;
  onPrevTrack?: () => void;
}

export const GlobalAudioPlayer: React.FC<GlobalAudioPlayerProps> = ({
  currentSegment,
  playbackState,
  onNextTrack,
  onPrevTrack,
}) => {
  if (!currentSegment) return null;

  const isPlaying = playbackState.isPlaying;

  const formatSec = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Track Info */}
        <div className="flex items-center gap-3.5 w-full md:w-1/3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20 font-mono text-xs font-bold">
            #{currentSegment.serialNumber}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 truncate">
                {currentSegment.subject}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {currentSegment.startTime} - {currentSegment.endTime}
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {currentSegment.title}
            </h4>
          </div>
        </div>

        {/* Center Controls & Scrubber */}
        <div className="flex flex-col items-center gap-1.5 w-full md:w-5/12">
          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onPrevTrack}
              title="Previous Track"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={() => audioPlayer.skip(-10)}
              title="Rewind 10 seconds"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              <Rewind className="w-4 h-4" />
            </button>

            <button
              onClick={() => audioPlayer.togglePlay()}
              className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={() => audioPlayer.skip(10)}
              title="Fast Forward 10 seconds"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              <FastForward className="w-4 h-4" />
            </button>
            <button
              onClick={onNextTrack}
              title="Next Track"
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Time Scrubber */}
          <div className="flex items-center gap-3 w-full">
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 w-10 text-right">
              {formatSec(playbackState.currentTime)}
            </span>
            <div
              onClick={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pct = (e.clientX - rect.left) / rect.width;
                audioPlayer.seek(pct * playbackState.duration);
              }}
              className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full cursor-pointer relative group overflow-hidden"
            >
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
                style={{
                  width: `${
                    playbackState.duration > 0
                      ? Math.min(100, (playbackState.currentTime / playbackState.duration) * 100)
                      : 0
                  }%`,
                }}
              ></div>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 w-10">
              {formatSec(playbackState.duration)}
            </span>
          </div>
        </div>

        {/* Right Volume & Speed Controls */}
        <div className="flex items-center justify-end gap-3 w-full md:w-1/3">
          {/* Rate Selector */}
          <select
            value={playbackState.playbackRate}
            onChange={e => audioPlayer.setRate(parseFloat(e.target.value))}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
          >
            <option value="0.75">0.75x</option>
            <option value="1.0">1.0x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2.0">2.0x</option>
          </select>

          {/* Volume Control */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => audioPlayer.toggleMute()}
              className="p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {playbackState.isMuted || playbackState.volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-500" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={playbackState.isMuted ? 0 : playbackState.volume}
              onChange={e => audioPlayer.setVolume(parseFloat(e.target.value))}
              className="w-16 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

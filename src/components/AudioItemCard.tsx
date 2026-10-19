import React, { useState } from 'react';
import {
  Play,
  Pause,
  ChevronDown,
  ChevronUp,
  Volume2,
  VolumeX,
  Clock,
  FileAudio
} from 'lucide-react';
import { AudioSegment, PlaybackState } from '../types/audio';
import { audioPlayer } from '../utils/audioPlayerManager';

interface AudioItemCardProps {
  segment: AudioSegment;
  playbackState: PlaybackState;
  onSelectTag?: (tag: string) => void;
}

export const AudioItemCard: React.FC<AudioItemCardProps> = ({
  segment,
  playbackState,
  onSelectTag,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCurrent = playbackState.currentSegmentId === segment.id;
  const isPlaying = isCurrent && playbackState.isPlaying;

  const handleTogglePlay = () => {
    audioPlayer.togglePlay(segment);
  };

  const handleSeekLine = (startSec: number) => {
    if (!isCurrent) {
      audioPlayer.playSegment(segment, Math.max(0, startSec - segment.startSeconds));
    } else {
      audioPlayer.seek(Math.max(0, startSec - segment.startSeconds));
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`rounded-xl border transition-colors bg-white dark:bg-slate-900 ${
        isCurrent
          ? 'border-indigo-600 ring-1 ring-indigo-600 dark:border-indigo-500'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Top Header Row: Title on Left, Menu to Hear Audio on Right */}
      <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Title & Original Recording Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              #{segment.serialNumber}
            </span>
            {segment.primaryTag && (
              <button
                type="button"
                onClick={() => onSelectTag && onSelectTag(segment.primaryTag)}
                className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
              >
                {segment.primaryTag}
              </button>
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {segment.startTime} - {segment.endTime} ({segment.durationFormatted})
            </span>
            {segment.isUploadedAudio ? (
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Original Recording
              </span>
            ) : (
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                Audio preview
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
            {segment.title}
          </h3>

          <p className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
            {segment.rawFilename}
          </p>
        </div>

        {/* Right Side: Menu / Player to Hear Audio (NO download options) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Active Time Display if current */}
          {isCurrent && (
            <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
              {formatTime(playbackState.currentTime)} / {formatTime(playbackState.duration || 180)}
            </div>
          )}

          {/* Hear Audio Button */}
          <button
            onClick={handleTogglePlay}
            aria-label={isPlaying ? 'Pause Audio' : 'Hear Audio'}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              isPlaying
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-700'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Hear Audio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Embedded scrubber if current track is active */}
      {isCurrent && (
        <div className="px-5 pb-3">
          <div
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = (e.clientX - rect.left) / rect.width;
              audioPlayer.seek(pct * playbackState.duration);
            }}
            className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden cursor-pointer"
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
        </div>
      )}

      {/* Below Option: Expand Transcript */}
      <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/40 px-4 sm:px-5 py-2.5 flex items-center justify-between rounded-b-xl">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span>Hide Transcript</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span>Expand Transcript</span>
            </>
          )}
        </button>

        <span className="text-xs text-slate-500 font-mono">
          {segment.transcriptLines.length} sections
        </span>
      </div>

      {/* Expanded Transcript Section: The Actual Transcript */}
      {isExpanded && (
        <div className="border-t border-slate-200 dark:border-slate-800 p-4 sm:p-5 bg-slate-50 dark:bg-slate-950/80 rounded-b-xl space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Actual Transcript
          </div>

          <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
            {segment.transcriptLines.map((line, idx) => {
              const isActive = isCurrent && playbackState.activeLineIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => handleSeekLine(line.startSec)}
                  className={`p-3 rounded-lg border text-sm leading-relaxed cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-300 dark:border-indigo-700 text-slate-900 dark:text-white'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {line.speaker}:
                    </span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400">
                      [{line.start} - {line.end}]
                    </span>
                    {isActive && (
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 ml-auto">
                        Speaking
                      </span>
                    )}
                  </div>
                  <p className="whitespace-pre-wrap">{line.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

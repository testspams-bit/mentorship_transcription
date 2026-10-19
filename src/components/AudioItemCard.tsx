import React, { useState } from 'react';
import { Play, Pause, FileText, ChevronDown, ChevronUp } from 'lucide-react';
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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCurrent = playbackState.currentSegmentId === segment.id;
  const isPlaying = isCurrent && playbackState.isPlaying;

  const handleTogglePlay = () => {
    audioPlayer.togglePlay(segment);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`rounded-lg border transition-colors bg-white dark:bg-slate-900 ${
        isCurrent
          ? 'border-indigo-600 ring-1 ring-indigo-600 dark:border-indigo-500'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      {/* Compact Row: Only ONE Title, ONE Play Icon, ONE Transcript Icon */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
            {segment.serialNumber}.
          </span>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
            {segment.title}{' '}
            <span className="font-normal font-mono text-xs text-slate-500 dark:text-slate-400">
              ({segment.startTime} - {segment.endTime})
            </span>
          </h3>
        </div>

        {/* Right Icons: One to Play, One to Open Transcript */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Time indicator if currently active */}
          {isCurrent && (
            <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 mr-1 hidden sm:inline">
              {formatTime(playbackState.currentTime)} / {formatTime(playbackState.duration)}
            </span>
          )}

          {/* ONE Icon to Play */}
          <button
            onClick={handleTogglePlay}
            title={isPlaying ? 'Pause' : 'Play labeled segment'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isPlaying
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          {/* ONE Icon to Open Transcript */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Close transcript' : 'Open transcript'}
            aria-label="Open transcript"
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              isExpanded
                ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress line if active */}
      {isCurrent && (
        <div className="px-4 pb-2">
          <div
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = (e.clientX - rect.left) / rect.width;
              audioPlayer.seek(pct * playbackState.duration);
            }}
            className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden cursor-pointer"
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

      {/* Expanded Transcript Drawer */}
      {isExpanded && (
        <div className="border-t border-slate-100 dark:border-slate-800 p-3 sm:p-4 bg-slate-50 dark:bg-slate-950/70 rounded-b-lg">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Transcript
          </div>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
            {segment.transcriptLines.map((line, idx) => {
              const isActive = isCurrent && playbackState.activeLineIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    const offset = Math.max(0, line.startSec - segment.startSeconds);
                    if (!isCurrent) {
                      audioPlayer.playSegment(segment, offset);
                    } else {
                      audioPlayer.seek(offset);
                    }
                  }}
                  className={`p-2 rounded cursor-pointer transition-colors ${
                    isActive
                      ? 'bg-indigo-100/70 dark:bg-indigo-950/60 font-medium text-slate-900 dark:text-white'
                      : 'hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span className="font-semibold text-slate-900 dark:text-white mr-1.5">
                    {line.speaker}:
                  </span>
                  <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 mr-2">
                    [{line.start} - {line.end}]
                  </span>
                  <span>{line.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

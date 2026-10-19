export type SubjectType = 'Biology' | 'Physics' | 'Chemistry' | 'Exam Strategy' | 'Coaching & Mentorship';

export interface TimestampedLine {
  start: string;
  end: string;
  startSec: number;
  endSec: number;
  speaker: 'Dhruv' | 'Ayush' | 'Coordinator' | 'General';
  text: string;
}

export interface AudioSegment {
  id: string;
  serialNumber: string;
  rawFilename: string;
  startTime: string;
  endTime: string;
  startSeconds: number;
  endSeconds: number;
  durationFormatted: string;
  label: string;
  title: string;
  subject: SubjectType;
  primaryTag: string;
  tags: string[];
  summary: string;
  keyTakeaways: string[];
  transcriptLines: TimestampedLine[];
  fullTranscriptText: string;
  audioBlobUrl?: string;
  isUploadedAudio?: boolean;
  fileSize?: string;
}

export interface PlaybackState {
  currentSegmentId: string | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isMuted: boolean;
  activeLineIndex: number;
}

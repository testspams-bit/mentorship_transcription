import { AudioSegment, PlaybackState } from '../types/audio';

type Listener = (state: PlaybackState) => void;

class AudioPlayerManager {
  private audioElement: HTMLAudioElement;
  private currentSegment: AudioSegment | null = null;
  private listeners: Set<Listener> = new Set();
  private synthUtterance: SpeechSynthesisUtterance | null = null;
  private isUsingSynth = false;
  private synthInterval: number | null = null;
  private virtualTime = 0;
  private virtualDuration = 180;
  private masterAudioUrl: string | null = null;

  private state: PlaybackState = {
    currentSegmentId: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1.0,
    isMuted: false,
    activeLineIndex: 0,
  };

  constructor() {
    this.audioElement = new Audio();
    this.setupAudioListeners();
  }

  public setMasterAudio(url: string) {
    this.masterAudioUrl = url;
    this.audioElement.src = url;
    this.audioElement.load();
  }

  public getMasterAudioUrl(): string | null {
    return this.masterAudioUrl;
  }

  private setupAudioListeners() {
    this.audioElement.addEventListener('timeupdate', () => {
      if (!this.isUsingSynth && this.currentSegment) {
        const rawTime = this.audioElement.currentTime;

        // If playing from master audio (where total duration > segment duration)
        if (this.masterAudioUrl && (!this.currentSegment.audioBlobUrl || this.currentSegment.audioBlobUrl === this.masterAudioUrl)) {
          // Check if we reached or exceeded the end of the labelled segment
          if (rawTime >= this.currentSegment.endSeconds) {
            this.pause();
            this.audioElement.currentTime = this.currentSegment.startSeconds;
            this.updateState({
              isPlaying: false,
              currentTime: this.currentSegment.endSeconds - this.currentSegment.startSeconds,
            });
            return;
          }

          // If somehow time is before segment start, seek to start
          if (rawTime < this.currentSegment.startSeconds - 1) {
            this.audioElement.currentTime = this.currentSegment.startSeconds;
          }

          const relativeCurrentTime = Math.max(0, rawTime - this.currentSegment.startSeconds);
          const segmentDuration = Math.max(1, this.currentSegment.endSeconds - this.currentSegment.startSeconds);

          this.updateState({
            currentTime: relativeCurrentTime,
            duration: segmentDuration,
            activeLineIndex: this.calculateActiveLineIndex(rawTime),
          });
        } else {
          // Dedicated cut clip
          this.updateState({
            currentTime: rawTime,
            duration: this.audioElement.duration || this.state.duration,
            activeLineIndex: this.calculateActiveLineIndex(rawTime),
          });
        }
      }
    });

    this.audioElement.addEventListener('play', () => {
      this.updateState({ isPlaying: true });
    });

    this.audioElement.addEventListener('pause', () => {
      this.updateState({ isPlaying: false });
    });

    this.audioElement.addEventListener('ended', () => {
      this.updateState({ isPlaying: false, currentTime: 0, activeLineIndex: 0 });
    });

    this.audioElement.addEventListener('loadedmetadata', () => {
      if (this.currentSegment) {
        const segDur = this.currentSegment.endSeconds - this.currentSegment.startSeconds;
        this.updateState({
          duration: segDur > 0 ? segDur : this.audioElement.duration || this.state.duration,
        });
      }
    });
  }

  private calculateActiveLineIndex(time: number): number {
    if (!this.currentSegment || !this.currentSegment.transcriptLines.length) return 0;
    const lines = this.currentSegment.transcriptLines;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const relStart = line.startSec - this.currentSegment.startSeconds;
      const relEnd = line.endSec - this.currentSegment.startSeconds;

      if (time >= relStart && time < relEnd) {
        return i;
      }
      if (time >= line.startSec && time < line.endSec) {
        return i;
      }
    }
    return 0;
  }

  public subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l(this.state));
  }

  private updateState(partial: Partial<PlaybackState>) {
    this.state = { ...this.state, ...partial };
    this.notify();
  }

  public async playSegment(segment: AudioSegment, startOffset = 0) {
    this.stopSynth();
    const isNew = this.currentSegment?.id !== segment.id;
    this.currentSegment = segment;

    const segmentDuration = Math.max(1, segment.endSeconds - segment.startSeconds);

    // Case 1: Individual audio blob exists for this segment
    if (segment.audioBlobUrl && segment.audioBlobUrl !== this.masterAudioUrl) {
      this.isUsingSynth = false;
      if (isNew || this.audioElement.src !== segment.audioBlobUrl) {
        this.audioElement.src = segment.audioBlobUrl;
        this.audioElement.load();
      }
      this.audioElement.playbackRate = this.state.playbackRate;
      this.audioElement.volume = this.state.isMuted ? 0 : this.state.volume;
      if (startOffset > 0) {
        this.audioElement.currentTime = startOffset;
      }
      this.updateState({
        currentSegmentId: segment.id,
        duration: segmentDuration,
        isPlaying: true,
      });
      try {
        await this.audioElement.play();
      } catch (err) {
        console.warn('Playback error:', err);
        this.playWithSynth(segment, startOffset);
      }
      return;
    }

    // Case 2: Master audio URL downloaded from MEGA / loaded at once
    if (this.masterAudioUrl) {
      this.isUsingSynth = false;
      if (this.audioElement.src !== this.masterAudioUrl) {
        this.audioElement.src = this.masterAudioUrl;
        this.audioElement.load();
      }
      this.audioElement.playbackRate = this.state.playbackRate;
      this.audioElement.volume = this.state.isMuted ? 0 : this.state.volume;

      const targetStart = segment.startSeconds + startOffset;
      this.audioElement.currentTime = targetStart;

      this.updateState({
        currentSegmentId: segment.id,
        duration: segmentDuration,
        currentTime: startOffset,
        isPlaying: true,
      });

      try {
        await this.audioElement.play();
      } catch (err) {
        console.warn('Playback error with master audio:', err);
        this.playWithSynth(segment, startOffset);
      }
      return;
    }

    // Case 3: Speech preview fallback
    this.playWithSynth(segment, startOffset);
  }

  private playWithSynth(segment: AudioSegment, startOffset = 0) {
    this.isUsingSynth = true;
    this.audioElement.pause();
    this.virtualDuration = Math.max(1, segment.endSeconds - segment.startSeconds);
    this.virtualTime = startOffset;

    this.updateState({
      currentSegmentId: segment.id,
      duration: this.virtualDuration,
      currentTime: this.virtualTime,
      isPlaying: true,
      activeLineIndex: this.calculateActiveLineIndex(this.virtualTime),
    });

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const fullText = segment.transcriptLines.map(l => `${l.speaker}: ${l.text}`).join('. ');
      const utterance = new SpeechSynthesisUtterance(fullText.slice(0, 1500));
      utterance.rate = Math.min(2, Math.max(0.7, this.state.playbackRate * 1.05));
      utterance.volume = this.state.isMuted ? 0 : this.state.volume;

      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('en-IN'));
      if (hindiVoice) utterance.voice = hindiVoice;

      utterance.onend = () => {
        this.updateState({ isPlaying: false, currentTime: this.virtualDuration });
        this.stopSynth();
      };
      utterance.onerror = () => {
        this.stopSynth();
      };

      this.synthUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }

    if (this.synthInterval) clearInterval(this.synthInterval);
    this.synthInterval = window.setInterval(() => {
      if (this.isUsingSynth && this.state.isPlaying) {
        this.virtualTime += 0.25 * this.state.playbackRate;
        if (this.virtualTime >= this.virtualDuration) {
          this.pause();
          this.virtualTime = 0;
        }
        this.updateState({
          currentTime: this.virtualTime,
          activeLineIndex: this.calculateActiveLineIndex(this.virtualTime),
        });
      }
    }, 250);
  }

  private stopSynth() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  public togglePlay(segment?: AudioSegment) {
    if (segment && segment.id !== this.currentSegment?.id) {
      this.playSegment(segment);
      return;
    }

    if (this.state.isPlaying) {
      this.pause();
    } else {
      if (this.currentSegment) {
        if (this.isUsingSynth) {
          this.updateState({ isPlaying: true });
          if ('speechSynthesis' in window) {
            window.speechSynthesis.resume();
          }
        } else {
          this.audioElement.play().catch(() => {
            if (this.currentSegment) this.playWithSynth(this.currentSegment, this.state.currentTime);
          });
        }
      }
    }
  }

  public pause() {
    this.audioElement.pause();
    if (this.isUsingSynth && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    this.updateState({ isPlaying: false });
  }

  public seek(seconds: number) {
    if (this.isUsingSynth) {
      this.virtualTime = Math.max(0, Math.min(seconds, this.virtualDuration));
      this.updateState({
        currentTime: this.virtualTime,
        activeLineIndex: this.calculateActiveLineIndex(this.virtualTime),
      });
    } else if (this.currentSegment) {
      if (this.masterAudioUrl && (!this.currentSegment.audioBlobUrl || this.currentSegment.audioBlobUrl === this.masterAudioUrl)) {
        const target = this.currentSegment.startSeconds + Math.max(0, Math.min(seconds, this.currentSegment.endSeconds - this.currentSegment.startSeconds));
        this.audioElement.currentTime = target;
        this.updateState({
          currentTime: seconds,
          activeLineIndex: this.calculateActiveLineIndex(target),
        });
      } else {
        this.audioElement.currentTime = seconds;
        this.updateState({
          currentTime: seconds,
          activeLineIndex: this.calculateActiveLineIndex(seconds),
        });
      }
    }
  }

  public skip(delta: number) {
    const newTime = Math.max(0, this.state.currentTime + delta);
    this.seek(newTime);
  }

  public setRate(rate: number) {
    this.audioElement.playbackRate = rate;
    if (this.synthUtterance) {
      this.synthUtterance.rate = rate;
    }
    this.updateState({ playbackRate: rate });
  }

  public setVolume(volume: number) {
    this.audioElement.volume = volume;
    this.updateState({ volume, isMuted: volume === 0 });
  }

  public toggleMute() {
    const newMuted = !this.state.isMuted;
    this.audioElement.volume = newMuted ? 0 : this.state.volume;
    this.updateState({ isMuted: newMuted });
  }

  public getCurrentSegment() {
    return this.currentSegment;
  }
}

export const audioPlayer = new AudioPlayerManager();

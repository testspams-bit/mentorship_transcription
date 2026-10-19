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

  private setupAudioListeners() {
    this.audioElement.addEventListener('timeupdate', () => {
      if (!this.isUsingSynth) {
        this.updateState({
          currentTime: this.audioElement.currentTime,
          duration: this.audioElement.duration || this.state.duration,
          activeLineIndex: this.calculateActiveLineIndex(this.audioElement.currentTime),
        });
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
      this.updateState({
        duration: this.audioElement.duration || this.state.duration,
      });
    });
  }

  private calculateActiveLineIndex(time: number): number {
    if (!this.currentSegment || !this.currentSegment.transcriptLines.length) return 0;
    const lines = this.currentSegment.transcriptLines;
    
    // Check if lines have relative seconds or absolute seconds
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // If audio file is a cut clip, time starts at 0 up to duration
      // Check both relative time (offset from start) and absolute time
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

    if (segment.audioBlobUrl) {
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
        console.warn('Audio play prevented or error, falling back to speech preview:', err);
        this.playWithSynth(segment, startOffset);
      }
    } else {
      // Preloaded segment without uploaded audio file: use synchronized synthesized voice preview
      this.playWithSynth(segment, startOffset);
    }
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
      // Read active transcript text
      const fullText = segment.transcriptLines.map(l => `${l.speaker}: ${l.text}`).join('. ');
      const utterance = new SpeechSynthesisUtterance(fullText.slice(0, 1500));
      utterance.rate = Math.min(2, Math.max(0.7, this.state.playbackRate * 1.05));
      utterance.volume = this.state.isMuted ? 0 : this.state.volume;

      // Try selecting a Hindi/Indian voice if available
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

    // Interval to tick virtual progress
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
    } else {
      this.audioElement.currentTime = seconds;
      this.updateState({
        currentTime: seconds,
        activeLineIndex: this.calculateActiveLineIndex(seconds),
      });
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

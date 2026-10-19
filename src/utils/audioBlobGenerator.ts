import JSZip from 'jszip';

/**
 * Generates an actual playable WAV audio blob in-memory with pleasant harmonic tones
 * so that any uploaded or demo zip file contains valid audio files playable in HTML5 audio.
 */
export function generateTestWavBlob(durationSeconds = 8, baseFrequency = 440): Blob {
  const sampleRate = 22050;
  const numChannels = 1;
  const numSamples = sampleRate * durationSeconds;
  const bytesPerSample = 2; // 16-bit
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // Write WAV header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // subchunk1size (16 for PCM)
  view.setUint16(20, 1, true); // audio format (1 = PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // bits per sample
  writeString(view, 36, 'data');
  view.setUint32(40, dataSize, true);

  // Generate pleasant harmonic voice-like acoustic tone with decay
  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Layered frequencies mimicking calm speech frequencies (fundamental ~220Hz + harmonics)
    const wave =
      0.5 * Math.sin(2 * Math.PI * baseFrequency * t) +
      0.25 * Math.sin(2 * Math.PI * (baseFrequency * 1.5) * t) +
      0.15 * Math.sin(2 * Math.PI * (baseFrequency * 2) * t);
    
    // Add speech cadence modulation (pulses every 0.3s)
    const cadence = 0.5 + 0.5 * Math.sin(2 * Math.PI * 3.3 * t);
    const sample = Math.max(-1, Math.min(1, wave * cadence * 0.7));
    
    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
    offset += 2;
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Builds a sample ZIP archive containing audio files for testing the unzipping flow
 */
export async function createDemoZipArchive(): Promise<Blob> {
  const zip = new JSZip();

  const demoFilenames = [
    {
      name: '02_00-03-00_to_00-07-00_Biology_NCERT_revision_and_practice.wav',
      freq: 330,
    },
    {
      name: '04_00-09-30_to_00-12-00_Physics_Calculus_Silly_Mistakes_and_Electrostatics.wav',
      freq: 440,
    },
    {
      name: '05_00-12-00_to_00-16-00_Assertion_Reason_Mastery_and_Tricks.wav',
      freq: 392,
    },
    {
      name: '13_00-38-00_to_00-42-00_Solving_Equivalent_Capacitance_10_over_11_Step_by_Step.wav',
      freq: 493,
    },
    {
      name: '16_00-47-30_to_00-50-30_Mastering_Isomerism_and_Reference_Books_MS_Chouhan.wav',
      freq: 349,
    },
    {
      name: '20_00-01-00-30_to_01-06-00_NEET_vs_Allen_Mindset_and_PYQ_Focus.wav',
      freq: 261,
    },
  ];

  for (const item of demoFilenames) {
    const wavBlob = generateTestWavBlob(6, item.freq);
    zip.file(item.name, wavBlob);
  }

  return await zip.generateAsync({ type: 'blob' });
}

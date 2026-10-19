import { File } from 'megajs';

export interface MegaDownloadProgress {
  loaded: number;
  total: number;
  percentage: number;
  status: string;
}

export async function downloadFromMegaUrl(
  megaUrl: string,
  onProgress?: (progress: MegaDownloadProgress) => void
): Promise<{ blob: Blob; filename: string }> {
  const cleanUrl = megaUrl.trim();

  if (onProgress) {
    onProgress({
      loaded: 0,
      total: 0,
      percentage: 0,
      status: 'Connecting to MEGA servers & loading file attributes...',
    });
  }

  // Handle standard MEGA file URL: https://mega.nz/file/...#... or https://mega.nz/#!...!...
  const file = File.fromURL(cleanUrl);
  await file.loadAttributes();

  const totalSize = file.size || 0;
  const filename = file.name || 'master_recording.mp3';

  if (onProgress) {
    onProgress({
      loaded: 0,
      total: totalSize,
      percentage: 10,
      status: `Connected to "${filename}". Downloading & decrypting...`,
    });
  }

  // Download buffer
  const buffer = await file.downloadBuffer();

  if (onProgress) {
    onProgress({
      loaded: totalSize,
      total: totalSize,
      percentage: 100,
      status: `Successfully downloaded and decrypted ${filename}!`,
    });
  }

  const mimeType = filename.endsWith('.wav') ? 'audio/wav' : 'audio/mpeg';
  const blob = new Blob([buffer], { type: mimeType });

  return { blob, filename };
}

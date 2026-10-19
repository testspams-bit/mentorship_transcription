/**
 * IndexedDB storage helper for persistent client-side audio storage.
 * Keeps uploaded audio blobs stored permanently across browser reloads.
 */

const DB_NAME = 'NEET_Audio_Vault_DB';
const DB_VERSION = 1;
const STORE_NAME = 'audio_recordings';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      reject(new Error('IndexedDB not supported in this browser.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveAudioBlob(key: string, blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(blob, key.toLowerCase());
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to save audio to IndexedDB:', err);
  }
}

export async function getAudioBlob(key: string): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key.toLowerCase());
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to retrieve audio from IndexedDB:', err);
    return null;
  }
}

export async function getAllStoredAudios(): Promise<Record<string, Blob>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.openCursor();
      const result: Record<string, Blob> = {};
      req.onsuccess = event => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          result[cursor.key as string] = cursor.value as Blob;
          cursor.continue();
        } else {
          resolve(result);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to get all stored audios:', err);
    return {};
  }
}

export async function clearStoredAudios(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to clear IndexedDB audio store:', err);
  }
}

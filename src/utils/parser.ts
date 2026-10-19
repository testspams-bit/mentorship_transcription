import { AudioSegment, SubjectType } from '../types/audio';

/**
 * Parses filenames like:
 * "02_00-03-00_to_00-07-00_Biology_NCERT_revision_and_practice.mp3"
 *
 * Components:
 * - Serial number: "02_00" or "02"
 * - Start time: "00-03-00" -> "03:00"
 * - End time: "00-07-00" -> "07:00"
 * - Label: "Biology_NCERT_revision_and_practice"
 */

export function parseTimeToSeconds(timeStr: string): number {
  const parts = timeStr.replace(/-/g, ':').split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    return parts[0];
  }
  return 0;
}

export function formatSecondsToTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = (n: number) => n.toString().padStart(2, '0');
  if (h > 0) {
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  return `${pad(m)}:${pad(s)}`;
}

export function inferSubject(labelOrTitle: string): { subject: SubjectType; tags: string[] } {
  const lower = labelOrTitle.toLowerCase();
  const tags: string[] = [];

  if (lower.includes('bio') || lower.includes('ncert') || lower.includes('botany') || lower.includes('zoology') || lower.includes('tissue') || lower.includes('organ')) {
    if (lower.includes('ncert')) tags.push('NCERT');
    if (lower.includes('botany')) tags.push('Botany');
    if (lower.includes('zoology')) tags.push('Zoology');
    if (lower.includes('practice')) tags.push('Question Practice');
    if (lower.includes('assertion') || lower.includes('reason')) tags.push('Assertion-Reason');
    return { subject: 'Biology', tags: tags.length ? tags : ['Biology', 'Revision'] };
  }

  if (lower.includes('physic') || lower.includes('electrostat') || lower.includes('capacit') || lower.includes('calculus') || lower.includes('kinematic') || lower.includes('vector') || lower.includes('derivation')) {
    if (lower.includes('electrostat')) tags.push('Electrostatics');
    if (lower.includes('capacit')) tags.push('Capacitance');
    if (lower.includes('calculus')) tags.push('Calculus');
    if (lower.includes('vector')) tags.push('Vectors');
    if (lower.includes('graph')) tags.push('Graphs');
    return { subject: 'Physics', tags: tags.length ? tags : ['Physics', 'Problem Solving'] };
  }

  if (lower.includes('chem') || lower.includes('redox') || lower.includes('isomer') || lower.includes('organic') || lower.includes('physical') || lower.includes('mole') || lower.includes('chouhan')) {
    if (lower.includes('organic')) tags.push('Organic Chemistry');
    if (lower.includes('isomer')) tags.push('Isomerism');
    if (lower.includes('redox')) tags.push('Redox');
    if (lower.includes('mole')) tags.push('Mole Concept');
    return { subject: 'Chemistry', tags: tags.length ? tags : ['Chemistry', 'Concepts'] };
  }

  if (lower.includes('cbt') || lower.includes('omr') || lower.includes('test') || lower.includes('time') || lower.includes('strategy') || lower.includes('rank') || lower.includes('pyq')) {
    if (lower.includes('cbt')) tags.push('CBT Mode');
    if (lower.includes('omr')) tags.push('OMR Test');
    if (lower.includes('rank')) tags.push('Rank Target');
    if (lower.includes('pyq')) tags.push('PYQs');
    return { subject: 'Exam Strategy', tags: tags.length ? tags : ['Test Strategy', 'Accuracy'] };
  }

  return {
    subject: 'Coaching & Mentorship',
    tags: ['Coaching Routine', 'Allen Guidance', 'Mentorship'],
  };
}

export function cleanLabelToTitle(label: string): string {
  return label
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(word => {
      const wLower = word.toLowerCase();
      if (['ncert', 'omr', 'cbt', 'pyq', 'pyqs', 'neet', 'ms', 'ar'].includes(wLower)) {
        return word.toUpperCase();
      }
      if (['and', 'to', 'in', 'of', 'for', 'the', 'vs'].includes(wLower)) {
        return wLower;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export function parseAudioFilename(filename: string): Partial<AudioSegment> {
  const cleanName = filename.replace(/\.(mp3|wav|ogg|m4a|aac)$/i, '');
  
  // Pattern 1: e.g. 02_00-03-00_to_00-07-00_Biology_NCERT_revision_and_practice
  // Also supports 02_03-00_to_07-00_label
  const fullMatch = cleanName.match(/^([0-9]+(?:_[0-9]+)?)[_-]([0-9]{2}(?:-[0-9]{2})+)[_-]to[_-]([0-9]{2}(?:-[0-9]{2})+)[_-](.+)$/i);
  
  if (fullMatch) {
    const serial = fullMatch[1].replace('_', '.');
    const startStr = fullMatch[2].replace(/-/g, ':');
    const endStr = fullMatch[3].replace(/-/g, ':');
    const label = fullMatch[4];

    // Format mm:ss or hh:mm:ss nicely
    const startSec = parseTimeToSeconds(startStr);
    const endSec = parseTimeToSeconds(endStr);
    const duration = Math.max(0, endSec - startSec);

    const title = cleanLabelToTitle(label);
    const { subject, tags } = inferSubject(label);

    return {
      serialNumber: serial,
      startTime: formatSecondsToTime(startSec),
      endTime: formatSecondsToTime(endSec),
      startSeconds: startSec,
      endSeconds: endSec,
      durationFormatted: formatSecondsToTime(duration),
      label: label,
      title: title,
      subject,
      tags,
    };
  }

  // Fallback pattern if simpler filename
  const simpleMatch = cleanName.match(/^([0-9]+)[_-](.+)$/);
  if (simpleMatch) {
    const serial = simpleMatch[1];
    const label = simpleMatch[2];
    const title = cleanLabelToTitle(label);
    const { subject, tags } = inferSubject(label);

    return {
      serialNumber: serial,
      startTime: '00:00',
      endTime: '00:00',
      startSeconds: 0,
      endSeconds: 0,
      durationFormatted: '00:00',
      label: label,
      title: title,
      subject,
      tags,
    };
  }

  const title = cleanLabelToTitle(cleanName);
  const { subject, tags } = inferSubject(cleanName);
  return {
    serialNumber: '00',
    startTime: '00:00',
    endTime: '00:00',
    startSeconds: 0,
    endSeconds: 0,
    durationFormatted: '00:00',
    label: cleanName,
    title: title,
    subject,
    tags,
  };
}

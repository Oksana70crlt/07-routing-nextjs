'use client';

import type { Note } from '@/types/note';
import NotePreview from '@/components/NotePreview/NotePreview';

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({
  note,
}: NotePreviewClientProps) {
  return <NotePreview note={note} />;
}
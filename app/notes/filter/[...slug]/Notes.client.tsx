'use client';

import type { NoteTag } from '@/types/note';
import NotesClient from '../../Notes.client';

interface FilterNotesClientProps {
  tag?: NoteTag;
}

export default function FilterNotesClient({
  tag,
}: FilterNotesClientProps) {
  return <NotesClient tag={tag} />;
}
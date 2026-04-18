import { notFound } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import NotesClient from '../../Notes.client';

interface FilterNotesPageProps {
  params: Promise<{ slug: string[] }>;
}

async function FilterNotesPage({ params }: FilterNotesPageProps) {
  const { slug } = await params;

  //перевіряємо, що slug існує і має довжину 1 (тобто один тег або 'all')
  if (!slug || slug.length !== 1) {
    notFound();
  }

  const rawTag = decodeURIComponent(slug[0]);
  const tag = rawTag === 'all' ? undefined : (rawTag as NoteTag);

  return <NotesClient key={tag ?? 'all'} tag={tag} />;
}

export default FilterNotesPage;

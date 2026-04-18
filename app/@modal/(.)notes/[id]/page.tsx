import Modal from '@/components/Modal/Modal';
import NotePreview from './NotePreview.client';
import { fetchNoteById } from '@/lib/api';

//тип пропсів для сторінки: params — це Promise, який повертає об’єкт із id нотатки.
interface NotePreviewPageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreviewPage({
  params,
}: NotePreviewPageProps) {
  //отримуємо id з параметрів і використовуємо його для отримання даних нотатки з API
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}

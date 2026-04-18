import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '../../lib/api/fetchNotes';
import NotesClient from './Notes.client';

const PER_PAGE = 12;

//головна сторінка, яка відображає список нотаток. Використовує React Query для попереднього завантаження даних нотаток і передає їх клієнтському компоненту NotesClient через HydrationBoundary.
async function NotesPage() {
  //
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, ''],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: '',
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}

export default NotesPage;

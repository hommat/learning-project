import Layout from '../components/layout/Layout';
import DataDisplay from '../components/DataDisplay';
import { getBooks } from '../lib/books';

export default function Books({ books }) {
  return (
    <Layout>
      <DataDisplay title="Books" dataArray={books} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const books = await getBooks();

  return {
    props: { books },
  };
}

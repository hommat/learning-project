import Layout from '../components/layout/Layout';
import DataDisplay from '../components/DataDisplay';
import { getArticles } from '../lib/articles';

export default function Articles({ articles }) {
  return (
    <Layout>
      <DataDisplay title="Articles" dataArray={articles} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const articles = await getArticles();

  return {
    props: { articles },
  };
}

export async function getArticles() {
  const articlesResponse = await fetch('http://nginx/api/articles');
  const { articles } = await articlesResponse.json();

  return articles;
}

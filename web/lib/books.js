export async function getBooks() {
  const booksResponse = await fetch('http://nginx/api/books');
  const { books } = await booksResponse.json();

  return books;
}

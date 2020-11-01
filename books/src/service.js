class BookService {
  books = [
    { id: 1, data: 'Book 1' },
    { id: 2, data: 'Book 2' },
  ];

  getBooks() {
    return this.books.map((book) => ({ ...book }));
  }
}

module.exports = BookService;

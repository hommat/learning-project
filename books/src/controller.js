const BookService = require('./service');

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  get(req, res) {
    const books = this.bookService.getBooks();

    return res.json({ books });
  }
}

module.exports = BookController;

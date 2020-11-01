const BookService = require('./service');

const bookService = new BookService();

describe("BookService", () => {
    describe("getBooks", () => {
        test("returns not empty array", () => {
            expect(bookService.getBooks().length).not.toBe(0);
        })
    })
})
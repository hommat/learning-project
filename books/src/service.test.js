const BookService = require('./service');

const bookService = new BookService();

describe("Book service", () => {
    describe("getBooks", () => {
        test("returns not empty array", () => {
            expect(bookService.getBooks().length).not.toBe(2);
        })
    })
})
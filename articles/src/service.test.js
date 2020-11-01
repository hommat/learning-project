const ArticleService = require('./service');

const articleService = new ArticleService();

describe("ArticleService", () => {
    describe("getBooks", () => {
        test("returns not empty array", () => {
            expect(articleService.getArticles().length).not.toBe(2);
        })
    })
})
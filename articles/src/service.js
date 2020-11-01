class ArticleService {
  articles = [
    { id: 1, data: 'Article 1' },
    { id: 2, data: 'Article 2' },
  ];

  getArticles() {
    return this.articles.map((article) => ({ ...article }));
  }
}

module.exports = ArticleService;

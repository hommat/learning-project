const ArticleService = require('./service');

class ArticleController {
  constructor() {
    this.articleService = new ArticleService();
  }

  get(req, res) {
    const articles = this.articleService.getArticles();

    return res.json({ articles });
  }
}

module.exports = ArticleController;

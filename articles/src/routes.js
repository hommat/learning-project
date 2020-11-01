const express = require('express');
const router = express.Router();

const ArticleController = require('./controller');

const articleController = new ArticleController();

router.get('/', articleController.get.bind(articleController));

module.exports = router;
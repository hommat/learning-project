const express = require('express');
const router = express.Router();

const BookController = require('./controller');

const bookController = new BookController();

router.get('/', bookController.get.bind(bookController));

module.exports = router;
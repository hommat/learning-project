const express = require('express');

const books = [{ id: 1, data: 'Book 1' }, {id: 2, data: 'Book 2'}];
const port = process.env.PORT || 3000;

const app = express();

app.get('/api/books', (req, res) => {
    console.log("getting books")
    res.json({ books });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
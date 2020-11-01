const express = require('express');

const articles = [{ id: 1, data: 'Article 1' }, {id: 2, data: 'Article 2'}];
const port = process.env.PORT || 3000;

const app = express();

app.get('/api/articles', (req, res) => {
    res.json({ articles });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
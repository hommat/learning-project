const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

app.use('/api/articles', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
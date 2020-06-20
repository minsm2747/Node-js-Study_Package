const express = require('express');
const app = express();
const port = 3020;

app.get('/', (req, res) => res.send('Hello World!'));
    res.send('Login Please');

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
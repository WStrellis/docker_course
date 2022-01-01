const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Westley's App</h1>
    <p>Lions are yellow</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);

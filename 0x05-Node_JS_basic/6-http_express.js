const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/:id', (req, res) => {
  res.send(`Hello ${req.params.id}`);
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;

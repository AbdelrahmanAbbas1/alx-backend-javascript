const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  const studentData = await countStudents('database.csv');
  res.send(`This is the list of our students\n${studentData}`);
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;

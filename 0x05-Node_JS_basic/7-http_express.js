const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  try {
    const studentData = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;

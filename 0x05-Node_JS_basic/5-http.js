const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    const studentData = await countStudents('database.csv');
    res.write('This is the list of our students\n');
    res.end(studentData);
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port, host, () => {
  console.log('...');
});

module.exports = app;

const fs = require('fs/promises');

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').slice(1);

    const students = {};
    lines.forEach((val) => {
      const line = val.split(',');
      const [firstname, , , field] = line;
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    return students;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = readDatabase;

const fs = require('node:fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const chunk = data.split('\n');
    const lines = chunk.slice(1);
    const sweList = [];
    const csList = [];
    let sweNumber = 0;
    let csNumber = 0;
    console.log(`Number of students: ${lines.length}`);
    lines.forEach((val) => {
      const line = val.split(',');
      if (line[3] === 'CS') {
        csNumber += 1;
        csList.push(line[0]);
      } else if (line[3] === 'SWE') {
        sweNumber += 1;
        sweList.push(line[0]);
      }
    });
    console.log(`Number of students in CS: ${csNumber}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweNumber}. List: ${sweList.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

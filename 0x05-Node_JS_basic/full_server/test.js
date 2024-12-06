const readDatabase = require('./utils');

const studentData = readDatabase('database.csv');

studentData.then((data) => {
  console.log(data);
  Object.entries(data).forEach(([key, val]) => {
    console.log(`Number of students in ${key}: ${val.length}`);
    console.log(`List: ${[...val].join(', ')}`);
  });
});

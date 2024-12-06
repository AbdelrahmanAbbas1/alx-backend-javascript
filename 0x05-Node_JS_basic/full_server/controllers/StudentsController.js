const readDatabase = require('../utils');

const path = process.argv[process.argv.length - 1];

class StudentsController {
  static getAllStudents(req, res) {
    res.send('This is the list of our students');
    const studentData = readDatabase(path);

    studentData.then((data) => {
      Object.entries(data).forEach(([field, students]) => {
        res.send(`Number of students in ${field}: ${students.length}. List: ${[...students].join(', ')}`);
        return res.status;
      });
    }).catch(() => {
      res.send('Cannot load the database');
      return res.status;
    });
  }

  static getAllStudentsbyMajor(req, res) {
    const { major } = req.params;

    if (major === 'CS' || major === 'SWE') {
      const studentData = readDatabase(path);

      studentData.then((data) => {
        res.send(`List: ${[...data[major]].join(', ')}`);
      }).catch(() => {
        res.send('Cannot load the database');
        return res.status;
      });
    }
    res.send('Major parameter must be CS or SWE');
    return res.status;
  }
}

export default StudentsController;

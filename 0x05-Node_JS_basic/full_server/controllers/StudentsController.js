import readDatabase from '../utils';

const path = process.argv[process.argv.length - 1];

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentData = await readDatabase(path);
      let response = 'This is the list of our students';

      Object.entries(studentData).forEach(([field, students]) => {
        response += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      });
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsbyMajor(req, res) {
    const { major } = req.params;

    if (major === 'CS' || major === 'SWE') {
      try {
        const studentData = await readDatabase(path);
        res.status(200).send(`List: ${studentData[major].join(', ')}`);
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;

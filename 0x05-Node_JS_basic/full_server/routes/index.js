import app from '../server';
import getHomePage from '../controllers/AppController';
import { getAllStudents, getAllStudentsbyMajor } from '../controllers/StudentsController';

app.get('/', getHomePage);

app.get('/students', getAllStudents);

app.get('/students:major', getAllStudentsbyMajor);

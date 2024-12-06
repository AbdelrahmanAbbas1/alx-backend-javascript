import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const routes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsbyMajor);
};

export default routes;
module.exports = routes;

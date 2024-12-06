class AppController {
  static getHomePage(req, res) {
    res.status(200).send('Hello ALX!');
    return res.status;
  }
}

export default AppController;
module.exports = AppController;

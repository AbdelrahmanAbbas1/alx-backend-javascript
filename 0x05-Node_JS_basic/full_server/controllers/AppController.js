class AppController {
  static getHomePage(req, res) {
    res.send('Hello ALX!');
    return res.status;
  }
}

export default AppController.getHomePage;

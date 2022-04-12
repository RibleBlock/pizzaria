
class Home {

  index = (req, res) => {
    // res.send('<h1>HOME!</h1>');
    res.render('index');
  };
}
export default new Home();
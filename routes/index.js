const router = require('express').Router();

const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPublic ,(req, res) => {
  res.render('login', { 
      layout: 'login',
    });
});

module.exports = router;


//app.get('/home', (req, res) => {
//    var params = {
//        layout: 'main',
//      }
//    res.render('dashboard', params)
//})

//app.get('/', (req, res) => {
//    var params = {
//        layout: 'login'
//      }
//    res.render('login', params)
//})

//app.get('/inventory', (req, res) => {
//    var params = {
//        layout: 'main',
//      }
//    res.render('inventory', params)
//})
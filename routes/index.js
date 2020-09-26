const router = require('express').Router();
const homeController = require('../controllers/homeCtrl'); 

router.get('/', (req, res) => {
  res.render('login', { 
      layout: 'login',
    });
});

router.get('/home', homeController.getExpired);

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
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login', { 
      layout: 'login',
    });
});

router.get('/home', (req,res) =>{
    res.render('dashboard',{
       layout: 'main' 
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
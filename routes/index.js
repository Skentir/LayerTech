const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('dashboard', { 
      Title: 'dashboard',
    });
});

module.exports = router;

const router = require('express').Router();

const homeController = require('../controllers/homeCtrl');

router.get('/',homeController.getExpired);

module.exports = router;

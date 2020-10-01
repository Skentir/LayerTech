const router = require('express').Router();

const homeController = require('../controllers/homeCtrl');

const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPrivate ,homeController.getExpired);

module.exports = router;

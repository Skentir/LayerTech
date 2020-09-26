const router = require('express').Router();

const userController = require('../controllers/userCtrl');

const {registerValidation, loginValidation} = require('../validators.js');

const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.post('/register', registerValidation, userController.registerUser);
router.post('/login', loginValidation, userController.loginUser);

router.get('/logout', userController.logoutUser);

module.exports = router;

const router = require('express').Router();

const userController = require('../controllers/userCtrl');

const {registerValidation, loginValidation} = require('../validators.js');


router.post('/register', registerValidation, userController.registerUser);

module.exports = router;
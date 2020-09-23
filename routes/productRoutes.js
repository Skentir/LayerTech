const router = require('express').Router();

const productController = require('../controllers/productCtrl');

router.get('/', productController.getProducts)
//router.get('/logout', userController.logoutUser);

module.exports = router;
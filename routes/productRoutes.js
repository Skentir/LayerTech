const router = require('express').Router();

const productController = require('../controllers/productCtrl');

router.get('/inventory', productController.getProduct)
//router.get('/logout', userController.logoutUser);

module.exports = router;
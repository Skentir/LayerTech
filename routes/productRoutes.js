const router = require('express').Router();

const productController = require('../controllers/productCtrl');

router.get('/', productController.getProducts)
router.get('/getItemDetails/:id', productController.getItemDetails)
router.post('/updateItem/:id', productController.updateItem)
router.get('/getProducts', productController.getItemDetails)
//Add product
router.post('/addProduct', productController.addProduct)

module.exports = router;

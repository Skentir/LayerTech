const router = require('express').Router();

const productController = require('../controllers/productCtrl');

const {addProductValidation} = require('../validators.js');

router.get('/', productController.getProducts)
router.get('/getItemDetails/:id', productController.getItemDetails)
router.post('/updateItem/:id', productController.updateItem)
router.get('/getProducts', productController.getItemDetails)
//Add product
router.post('/addProduct', addProductValidation, productController.addProduct)
router.delete('/deleteItem/:id', productController.deleteItem)

module.exports = router;

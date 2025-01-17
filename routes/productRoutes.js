const router = require('express').Router();

const productController = require('../controllers/productCtrl');
const {addProductValidation} = require('../validators.js');
const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPrivate, productController.getProducts)
router.get('/getItemDetails/:id', productController.getItemDetails)
router.post('/updateItem/:id', productController.updateItem)
router.get('/getProducts', productController.getItemDetails)
router.get('/sortByName', productController.sortByName)
router.get('/sortByExpiry', productController.sortByExpiry)
router.get('/sortByDateBought', productController.sortByDateBought)
router.get('/sortBySellingPrice', productController.sortBySellingPrice)
router.get('/sortByBasePrice', productController.sortByBasePrice)
router.get('/sortByQuantity', productController.sortByQuantity)
router.post('/addProduct', addProductValidation, productController.addProduct)
router.delete('/deleteItem/:id', productController.deleteItem)

module.exports = router;

const router = require('express').Router();

const stockController = require('../controllers/stockCtrl');

router.get('/', stockController.getStocks)
router.get('/getStockDetails/:id', stockController.getStockDetails)
//router.post('/updateItem/:id', productController.updateItem)
//router.get('/getProducts', productController.getItemDetails)
//Add product
//router.post('/addProduct', productController.addProduct)

module.exports = router;

const router = require('express').Router();

const stockController = require('../controllers/stockCtrl');

router.get('/', stockController.getStocks)
router.get('/getStockDetails/:id', stockController.getStockDetails)
//router.post('/updateItem/:id', productController.updateItem)
router.post('/addStock', stockController.addStock)

module.exports = router;

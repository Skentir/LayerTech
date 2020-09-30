const router = require('express').Router();

const stockController = require('../controllers/stockCtrl');

router.get('/', stockController.getStocks)
router.get('/getStockDetails/:id', stockController.getStockDetails)
router.post('/updateStock/:id', stockController.updateStock)


module.exports = router;

const router = require('express').Router();

const stockController = require('../controllers/stockCtrl');
const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPrivate ,stockController.getStocks)
router.get('/getStockDetails/:id', stockController.getStockDetails)
router.post('/addStock', stockController.addStock)
router.post('/updateStock/:id', stockController.updateStock)
router.delete('/deleteItem/:id', stockController.deleteItem)
router.get('/sortByRawMaterial', stockController.sortByRawMaterial)
router.get('/sortBySupplier', stockController.sortBySupplier)
router.get('/sortByExpiry', stockController.sortByExpiry)

module.exports = router;

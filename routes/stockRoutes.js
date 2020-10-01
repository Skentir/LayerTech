const router = require('express').Router();

const stockController = require('../controllers/stockCtrl');
const {addStockValidation, updateStockValidation} = require('../validators.js');
const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPrivate ,stockController.getStocks)
router.get('/getStockDetails/:id', stockController.getStockDetails)
router.post('/addStock', addStockValidation, stockController.addStock)
router.post('/updateStock/:id', updateStockValidation, stockController.updateStock)
router.delete('/deleteItem/:id', stockController.deleteItem)
router.get('/sortByRawMaterial', stockController.sortByRawMaterial)
router.get('/sortBySupplier', stockController.sortBySupplier)
router.get('/sortByExpiry', stockController.sortByExpiry)
router.get('/sortByDateBought', stockController.sortByDateBought)
router.get('/sortByCost', stockController.sortByCost)
router.get('/sortByQuantity', stockController.sortByQuantity)

module.exports = router;

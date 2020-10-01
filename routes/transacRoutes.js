const router = require('express').Router();
const transacController = require('../controllers/transacCtrl.js');
const { isPublic, isPrivate } = require('../middlewares/authenticator');

router.get('/', isPrivate, transacController.getTransactions);

router.get('/getTransactionDetails/:id', transacController.getTransactionDetails);
router.post('/addTransaction', transacController.addTransaction);
router.post('/updateTransaction/:id', transacController.updateTransaction);
router.delete('/deleteItem/:id', transacController.deleteItem)
router.get('/sortByDue', transacController.sortByDue)


module.exports = router;

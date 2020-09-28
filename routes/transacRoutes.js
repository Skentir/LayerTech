const router = require('express').Router();
const transacController = require('../controllers/transacCtrl.js');

router.get('/',  transacController.getTransactions);

//router.get('/getTransactionDetails/:id', transacController.getTransactionDetails);
//router.post('/addTransaction', transacController.addTransaction);
//router.post('/updateTransaction/:id', transacController.updateTransaction)


module.exports = router;

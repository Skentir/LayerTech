const router = require('express').Router();
const suppController = require('../controllers/suppCtrl');

router.get('/', suppController.getSuppliers);
router.get('/getSupplierDetails/:id', suppController.getSupplierDetails);
router.post('/addSupplier', suppController.addSupplier);
router.post('/updateSupplier/:id', suppController.updateSupplier);
router.delete('/deleteItem/:id', suppController.deleteItem);
router.get('/sortByName', suppController.sortByName)

module.exports = router;

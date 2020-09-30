const router = require('express').Router();
const suppController = require('../controllers/suppCtrl');

router.get('/', suppController.getSuppliers);
router.get('/getSupplierDetails/:id', suppController.getSupplierDetails);
router.post('/addSupplier', suppController.addSupplier);
router.post('/updateSupplier/:id', suppController.updateSupplier)


module.exports = router;

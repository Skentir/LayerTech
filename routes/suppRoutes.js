const router = require('express').Router();
const suppController = require('../controllers/suppCtrl');

const { isPublic, isPrivate } = require('../middlewares/authenticator');
router.get('/',isPrivate, suppController.getSuppliers);
router.get('/getSupplierDetails/:id', suppController.getSupplierDetails);
router.post('/addSupplier', suppController.addSupplier);
router.post('/updateSupplier/:id', suppController.updateSupplier);
router.delete('/deleteItem/:id', suppController.deleteItem);
router.get('/sortByName', suppController.sortByName)
router.get('/sortByCompany', suppController.sortByCompany)
router.get('/getNames', suppController.getNames)
router.get('/getPersonNames', suppController.getPersonNames)

module.exports = router;

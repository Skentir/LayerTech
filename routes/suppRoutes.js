const router = require('express').Router();
const suppController = require('../controllers/suppCtrl');

router.get('/', suppController.getSuppliers);

module.exports = router;

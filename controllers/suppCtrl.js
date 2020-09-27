var mongoose = require('mongoose');
const supplierModel = require('../models/suppliers');
const {validationResult} = require('express-validator');



exports.getSuppliers = function(req, res) {
    supplierModel.find({})
        .exec(function(err,result) {
            if (err)
                res.send(err)
            else if (!result)
                res.send(err)
            else {
                var supp = JSON.parse(JSON.stringify(result))
                var params = {
                    layout: 'main',
                    supplier: supp
                }
                res.render('suppliers',params)
                //res.send(params)
            }
        })   
}
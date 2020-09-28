var mongoose = require('mongoose');
const transactionModel = require('../models/transactions');
const {validationResult} = require('express-validator');


exports.getTransactions = function (req,res) {
   transactionModel.find({})
        .exec(function(err,result) {
            if (err)
                res.send(err)
            else if (!result)
                res.send(err)
            else {
                var parsed = JSON.parse(JSON.stringify(result))
                var params = {
                    layout: 'main',
                    transaction: parsed
                }
                res.render('transactions',params)
            }
        })   
}
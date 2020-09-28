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

exports.getTransactionDetails = function(req,res) 
{
  var itemID = mongoose.Types.ObjectId(req.params.id);
  
  transactionModel.findById(itemID)
    .exec(function(err,results){
      if (err)
        res.send(err);
      else if (!results)
        res.send(err);
      else
        res.send(results);
    });
} 

exports.addTransaction = function(req, res) {
  console.log(JSON.stringify(req.body))
  const {description, date, amount, type, payee, payer, contact, notes} = req.body;

  const newTransaction = {
      description: description,
      dateStarted: date,
      amount: amount,
      type: type,
      payee: payee,
      payer: payer,
      payerContact: contact,
      notes: notes
  };

  transactionModel.create(newTransaction, function(err, result){
    if (err) {
      console.log(err);
      req.flash('error_msg', 'Could not add. Please Try Again!');
    } else {
      req.flash("success_msg", 'Added!');
    }
  })
};
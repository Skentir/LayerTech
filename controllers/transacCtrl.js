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
  const {description, date, due, amount, type, payee, payer, contact, notes} = req.body;

  const newTransaction = {
      description: description,
      dateStarted: date,
      dateDue: due,
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
      res.redirect("/transactions")
    }
  })
};



exports.updateTransaction = function(req,res) {
  
  transactionModel.findByIdAndUpdate({_id:req.params.id},
    {
      $set: {
        description: req.body.description,
        dateAdded: req.body.dateAdded,
        dateDue: req.body.dateDue,
        amount: req.body.amount,
        type: req.body.type,
        payee: req.body.payee,
        payer: req.body.payer,
        payerContact: req.body.payerContact,
        notes: req.body.notes
      }      
    }, (err) => {
      if(err)
          res.send(err);
    });
};

exports.deleteItem = function(req, res) {
  transactionModel.deleteOne({ _id:req.params.id }, (err) => {
      if(err) {
        //req.flash('error_msg', 'Could not add product. Please Try Again!');
        res.send(err);
      } else {
        //req.flash("success_msg", 'Product added!');
        res.redirect('/transactions')
      }
  });
}

exports.sortByDue = function(req,res) {
  transactionModel.find({})
  .sort({dateDue: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      res.send(err);
    } else {
        var supp = JSON.parse(JSON.stringify(results))
        res.send(supp)
    }
  })
}
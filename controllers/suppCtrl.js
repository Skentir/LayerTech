var mongoose = require('mongoose');
const supplierModel = require('../models/suppliers');
const {validationResult} = require('express-validator');


exports.addSupplier = function(req, res) {
    const {name, position, company, contactNo, email, contractTerms, notes} = req.body;
  
    const newSupplier = {
        name : name,
        position : position,
        companyName : company,
        contactNo : contactNo,
        email: email,
        contractTerms : contractTerms,
        notes: notes
    };
  
    supplierModel.create(newSupplier, function(err, supp){
      if (err) {
        console.log(err);
        req.flash('error_msg', 'Could not add product. Please Try Again!');
      } else {
        req.flash("success_msg", 'Product added!');
        res.redirect('/suppliers');
      }
    })
  };

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


exports.getSupplierDetails = function(req,res) 
{
  var itemID = mongoose.Types.ObjectId(req.params.id);
  
  supplierModel.findById(itemID)
    .exec(function(err,results){
      if (err)
        res.send(err);
      else if (!results)
        res.send(err);
      else
        res.send(results);
    });
}


exports.updateSupplier= function(req,res) {
    supplierModel.findByIdAndUpdate({_id:req.params.id},
      {
        $set: {
            name :req.body.name,
            position: req.body.position,
            companyName: req.body.company,
            contactNo: req.body.contactNo,
            email: req.body.email,
            contractTerms: req.body.contract,
            notes: req.body.notes
        }      
      }, (err) => {
        if(err)
            res.send(err);
      });
  };
  
exports.deleteItem = function(req, res) {
  supplierModel.deleteOne({ _id:req.params.id }, (err) => {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
      //req.flash("success_msg", 'Product added!');
      res.redirect('/suppliers')
    }
  });
};
  
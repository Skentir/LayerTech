const mongoose = require('./connection');

const supplierSchema = new mongoose.Schema({
    name: {type: String},
    contactNo: {type: String},
    email: {type: String},
    companyName: {type:String},
    productList: {type: Array},  //array of string products the supplier provides
    contractTerms: {type: String}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const supplierModel = mongoose.model('suppliers', supplierSchema);

exports.create = function(obj, next) {
  const supplier = new supplierModel(obj);

  supplier.save(function(err, user) {
    next(err, user);
  });
};

exports.getOne = function(query, next) {
    supplierModel.findOne(query, function(err, supplier) {
    next(err, supplier);
  });
};

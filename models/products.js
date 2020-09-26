const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    //_id : mongoose.Schema.Types.ObjectId,
    //stockID :[{type:mongoose.Schema.Types.ObjectID, ref:'stock'}],
    productName : {type: String},
    expirationDate : {type: Date},
    dateBought : {type: Date},
    quantity : {type: Number},
    basePrice : {type: Number},
    sellingPrice : {type: Number}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

module.exports = mongoose.model('products', productSchema);

// THIS SHOULD BE IN THE CONTROLLER
/*
exports.create = function(obj, next) {
  const product = new productModel(obj);

  product.save(function(err, product) {
    next(err, product);
  })
};
*/

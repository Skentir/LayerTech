const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please provide a product name"]},
    description: { type: String, required: [true, "Please provide a description"]},
    price: { type: Number,required: [true, "Please provide the product's price"]},
    expiryDate: {type: Date, required: [true, "Please provide an expiration date"]}
}, {
     toObject: {
       virtuals: true,
     },
     toJSON: {
       virtuals: true,
     }
});

const productModel = mongoose.model('products', productSchema);

exports.addProduct = function(obj,next){
    const product = new productModel(obj);
    
    product.save(function(err,product){
        next(err,product);
    });
};
const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    stockID :[{type:mongoose.Schema.Types.ObjectID}, ref:'stock'],
    productName : String,
    expirationDate : Date,
    dateAdded : Date,
    Quantity : Number,
    basePrice : Number,
    sellingPrice : Number
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const adminModel = mongoose.model('admin', adminSachema);

module.exports = mongoose;
const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    //stockID :[{type:mongoose.Schema.Types.ObjectID, ref:'raw'}],
    productName : {type: String},
    expirationDate : {type: Date},
    dateBought : {type: Date},
    quantity : {type: Number},
    basePrice : {type: Number},
    sellingPrice : {type: Number},
    location : {type: String}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

module.exports = mongoose.model('products', productSchema);

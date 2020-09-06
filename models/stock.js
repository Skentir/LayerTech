const mongoose = require('./connection');

const stockSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    material : type: String,
    expirationDate : Date,
    location: String,
    description: String,
    quantity: Number,
    cost: Number,
//    supplierID: type:String This will be implemented when Suppliers are included
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const stockModel = mongoose.model('stocks', stockSchema);

module.exports = mongoose;
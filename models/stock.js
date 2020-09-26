const mongoose = require('./connection');

const stockSchema = new mongoose.Schema({
    rawMaterial : {type:String},
    //supplier :[{type:mongoose.Schema.Types.ObjectID, ref:'products'}],
    expirationDate : {type:Date},
    dateBought : {type:Date},
    quantity: {type:Number},
    location: {type:String},
    unit: {type:String},
    cost: {type:Number}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

module.exports = mongoose.model('raw', stockSchema);
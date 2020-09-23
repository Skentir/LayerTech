  const mongoose = require('./connection');

const productSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    stockID :[{type:mongoose.Schema.Types.ObjectID, ref:'stock'}],
    productName : String,
    expirationDate : Date,
    dateBought : Date,
    quantity : Number,
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

const productModel = mongoose.model('prod', productSchema);

exports.getAllProducts = function(sort, next){
    productModel.find({}).sort(sort).exec(function(err,result){
       if(err) throw err;
        var productObjects = [];
        
        result.forEach(function(doc){
           productObjects.push(doc.toObject()); 
        });
        
        next(productObjects);
    });
}

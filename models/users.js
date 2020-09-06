const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email: {type: String},
    password: {type: String},
    farmName: {type: String},
    description: {type:String},
    contactNo: {type:String}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const userModel = mongoose.model('users', userSchema);

module.exports = mongoose;
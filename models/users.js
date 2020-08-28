const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
    name:{type: String, required:[true, "What is your name?"]},
    username : {type : String, lowercase: true, required:[true, "Provide a Username"], unique: true},
    password : {type : String, required:[true, "Provide a password"]},
},{
     toObject: {
       virtuals: true,
     },
     toJSON: {
       virtuals: true,
     }
});

const userModel = mongoose.model('users', userSchema);

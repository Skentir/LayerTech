const mongoose = require('./connection');

const userSchema = new mongoose.Schema({
    name: {type: String},
    contactNo: {type: String},
    email: {type: String},
    password: {type: String},
    farmName: {type:String}
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const userModel = mongoose.model('users', userSchema);

exports.create = function(obj, next) {
  const user = new userModel(obj);

  user.save(function(err, user) {
    next(err, user);
  });
};

exports.getOne = function(query, next) {
  userModel.findOne(query, function(err, user) {
    next(err, user);
  });
};

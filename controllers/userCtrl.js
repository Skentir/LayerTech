const bcrypt = require('bcrypt');

const userModel = require('../models/users');

const {validationResult} = require('express-validator');

exports.registerUser = function(req,res){
  const errors = validationResult(req);

    if(errors.isEmpty()){
        const {name, contNo, email, pwd, compName} = req.body;

        userModel.getOne({email : email}, function(err, result){
           if(result){
               req.flash('error_msg', 'Email already used');
               res.redirect('/');
           } else{
               const saltRounds = 10;

               bcrypt.hash(pwd, saltRounds, function(err, hashed){
                   const newUser = {
                       name,
                       contactNo : contNo,
                       email,
                       password : hashed,
                       farmName : compName
                   };
                   userModel.create(newUser, function(err, user){
                       if(err){
                           console.log(err);
                           req.flash('error_msg', 'Could not create user. Please Try Again!');
                           res.redirect('/');
                       }else{
                           req.flash("success_msg", 'You are now registered!');
                           res.redirect('/');
                       }
                   })
               })
           }
        });
    }else{
        const messages = errors.array().map((item) => item.msg);

        req.flash('error_msg', messages.join(' '));
        res.redirect('/');
    }
};


exports.loginUser = function(req,res){
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const {
        username,
        password
      } = req.body;

    userModel.getOne({ email: username }, (err, user) => {
      if (err) {
        // Database error occurred...
        req.flash('error_msg', 'Database Error!');
        res.redirect('/');
      } else {
        // Successful query
        if (user) {
          // User found!

          // Check password with hashed value in the database
        bcrypt.compare(password, user.password, (err, result) => {
          // passwords match (result == true)
          if (result) {
            // Update session object once matched!
            req.session.user = user._id;
            req.session.name = user.name;

            console.log(req.session);

            res.redirect('/home');
          } else {
            // passwords don't match
            req.flash('error_msg', 'Incorrect password. Please try again.');
            res.redirect('/');
          }
        });
        } else {
          // No user found
          req.flash('error_msg', 'Unregistered Email.');
          res.redirect('/');
        }
      }});
    } else {
      const messages = errors.array().map((item) => item.msg);

      req.flash('error_msg', messages.join(' '));
      res.redirect('/');
    }
};

exports.logoutUser = (req, res) => {
  if (req.session) {
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  }
};

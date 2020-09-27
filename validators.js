const {body} = require('express-validator');

const registerValidation = [
  // Name should not be empty
  body('name').not().isEmpty().withMessage("Name is required."),

  //Contact No must not be empty
  body('contNo').not().isEmpty().withMessage("Enter Contact No.").isLength({min : 11}).withMessage("Enter valid contact number"),
    
  // Email should not be empty
  body('email').not().isEmpty().withMessage("Email is required."),
  
  // Password needs to be min 6 chars
  body('pwd').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),

  // Confirm Password needs to be min 6 chars AND must match the req.body.password field
  body('pwd1').isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
    .custom((value, { req }) => {
      if (value !== req.body.pwd) {
        throw new Error("Passwords must match.");
      }
      return true;
    }),
  body('compName').not().isEmpty().withMessage("Business Name is required")
];

const loginValidation = [
  body('username').not().isEmpty().withMessage("Email is required."),
  body('password').not().isEmpty().withMessage("Password is required.")
];

module.exports = {registerValidation, loginValidation};
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

const addProductValidation = [
  body('productName').not().isEmpty().withMessage("Product name is required."),
  body('expirationDate').not().isEmpty().withMessage("Expiration date is required."),
  body('dateBought').not().isEmpty().withMessage("Date bought is required")
    .custom((value, { req }) => {
      //Throw error if dateBought < expiryDate
      var dateBought = new Date(value).getTime();
      var expirationDate = new Date(req.body.expirationDate).getTime();

      if (dateBought > expirationDate) {
        throw new Error("Date bought must be greater than expiration date.");
      }
      return true;
    }),
  body('quantity').not().isEmpty().withMessage("Quantity is required.")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("Quantity cannot be negative.");
      }
      return true;
    }),
  body('basePrice').not().isEmpty().withMessage("Base price is required.")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("Base price cannot be negative.");
      }
      return true;
    }),
  body('sellingPrice').not().isEmpty().withMessage("Selling price is required.")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("Selling price cannot be negative.");
      }
      return true;
    })
];

module.exports = {registerValidation, loginValidation, addProductValidation};

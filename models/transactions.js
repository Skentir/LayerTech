const mongoose = require('./connection');

const transactionSchema = new mongoose.Schema({
    dateStarted: {type: date}, //needs input validation
    dateFinished: {type: date}, //cannot be earlier than started
    otherParty: {type: String},
    personInCharge: {type: String},
    contactOfParty: {type: String},
    contactOfPersonInCharge: {type: String},
    transactionType: {type:String},
    transactionNotes : {type: String} //for transaction details
},{
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        }
});

const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;

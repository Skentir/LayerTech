const mongoose = require('./connection');

const transactionSchema = new mongoose.Schema({
    dateStarted: {type: Date}, //needs input validation
    dateFinished: {type: Date}, //cannot be earlier than started
    amount: {type: Number},
    payee: {type: String},
    payer: {type: String},
    description: {type: String},
    payerContact: {type: String},
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

const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({  
  pin: {
    type: String
  },
  amount: {
    type: String
  },
  currencycount: [
    {
      Notes: {
        type: String,
      },
      count: {
        type: String,
      },
      total: {
        type: String,
      }
    }
  ],  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('transactions', TransactionSchema);


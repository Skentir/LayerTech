const mongoose = require('mongoose');

const databaseURL ='mongodb+srv://Broqz:KLyEksvpoqsbQXBE@cssweng.iyxpj.mongodb.net/LayerTech?retryWrites=true&w=majority';

const options = { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(databaseURL, options);

module.exports = mongoose;
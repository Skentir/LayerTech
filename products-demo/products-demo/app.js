const express = require('express');
const app = express();
const morgan = require('morgan'); //logger
const bodyParser = require('body-parser'); //parser
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');

mongoose.connect(
  'mongodb+srv://UserA:rIBLkGb6y4VrDa1Q@cluster.mongodb.net/',
   {
     dbName: 'Cluster0',
     useNewUrlParser: true,
     useUnifiedTopology: true
  }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Header management to prevent CORS error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') { //Browsers always sends OPTIONS requests before PUT or POST
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //All requests that are supported by this API
    return res.status(200).json({});
  }
  next();
});

//Routes which should handle requests
app.use('/products', productRoutes);

//Error Handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

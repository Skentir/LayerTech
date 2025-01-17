const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('./models/connection');

const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

const moment = require('moment');

const indexRouter = require('./routes/index');
const prodRouter = require('./routes/productRoutes');
const stockRouter = require('./routes/stockRoutes');
const suppRouter = require('./routes/suppRoutes');
const userRouter = require('./routes/userRoutes');
const homeRouter = require('./routes/homeRoutes');
const transactionRouter = require('./routes/transacRoutes');

const port = 3000;
const app = express();

app.engine( 'hbs', exphbs({
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  helpers: {
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        },
        'formatDate': function(dateTime) {
          return moment(dateTime).format('MMMM DD, YYYY')
        }
    }
}));

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));

app.listen(port, function() {
    console.log('App listening at port ' + port);
});

app.use(session({
  secret: 'kookie',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: true,
    //maxAge = ms - s - m - h - d
  cookie: { secure: false, maxAge: 1000 * 60 * 60 * 1 * 1 }
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

app.use('/',indexRouter);
app.use('/', userRouter);
app.use('/home',homeRouter);
app.use('/inventory',prodRouter);
app.use('/suppliers',suppRouter);
app.use('/transactions', transactionRouter);
app.use('/raw',stockRouter);

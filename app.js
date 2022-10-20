var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

require("dotenv").config();

const travelsModel = require("./models/travelsModel")

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const listadoRouter = require("./routes/listado");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret:"a1b2c3",
    resave:false,
    saveUninitialized: true,
  })
);

secured = (req, res, next) => {
  if (req.session.user) {
    next() 
  } else {
    res.redirect("/login");
  }
}

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"}))   

app.use('/', indexRouter);
app.use("/login", loginRouter);
app.use("/listado", secured, listadoRouter);

// catch 404 and forward to error handler
app.use("*", (req, res, next) => {
  res.send("ERROR 404 Ruta No Encontrada");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

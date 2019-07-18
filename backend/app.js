const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { assertOrFail } = require('./utils/helpers');

const routerItems  = require('./routes/items');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Url's de la API.
app.use('/api/items', routerItems);

// Funciones a utilizar en el sistema.
app.locals.assertOrFail = assertOrFail;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({message: "La ruta solicitada no existe."});
});

// error handler
app.use(function(err, req, res, next) {
  res.send({message: "Hubo un error en el servidor.", error: err.toString()});
});

module.exports = app;

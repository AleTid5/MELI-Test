const express = require('express');
const { helpers } = require('./utils/helpers');
const cors = require('cors');
const routerItems  = require('./routes/items');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set("port", process.env.port || process.env.PORT || 9000);

/**
 * Server endpoints.
 */
app.use('/api/items', routerItems);

/**
 * Injects helpers functions as Native in all app.
 */
app.locals.helpers = helpers;

/**
 * When a route is not found previously, it is caught here.
 */
app.use(function(req, res, next) {
  res.status(404).json({message: "La ruta solicitada no existe."});
});

/**
 * When the server has an uncontrolled exception, it' s caught here.
 */
app.use(function(err, req, res, next) {
  res.status(500).json({message: "Hubo un error en el servidor.", error: err.toString()});
});

module.exports = app;

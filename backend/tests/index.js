const express = require('express');
const routes = require('./routes/index');

// Instantiate express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set our port
const port = process.env.PORT || 8000;

// Register our routes in app
app.use('/', routes);

// Start our server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Export our app for testing purposes
module.exports = app;
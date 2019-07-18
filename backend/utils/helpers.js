const Exception = require('./Exceptions/Exception');
const fetch = require('node-fetch');
const config = require('../routes/config');

module.exports = assertOrFail = (comparison, message) => {
    if (! comparison) throw new Exception(1, message);
};

module.exports = getFrom = async path => {
    let response = null;

    await fetch(config.baseURL + path)
        .then(response => {
            assertOrFail(200 >= response.status && response.status < 300, response.statusText);
            return response.json();
        })
        .then(data => response = data);

    return response;
};
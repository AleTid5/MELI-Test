const Exception = require('./Exceptions/Exception');
const fetch = require('node-fetch');
const config = require('../config');

/**
 * When comparison is false, an exception is thrown.
 * @type {assertOrFail}
 */
module.exports = assertOrFail = (comparison, message, code = 422) => { // Unprocessable Entity
    if (! comparison) throw new Exception(code, message);
};

/**
 * To simplify a request from any route.
 * @type {function(*): *}
 */
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
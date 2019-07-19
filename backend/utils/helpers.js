const Exception = require('./exceptions/exception');

/**
 * When comparison is false, an exception is thrown.
 * @type {assertOrFail}
 */
module.exports = assertOrFail = (comparison, message, code = 422) => { // Unprocessable Entity
    if (! comparison) throw new Exception(code, message);
};
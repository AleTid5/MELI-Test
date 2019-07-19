/**
 * The main exception to be thrown.
 * @type {module.Exception}
 */
module.exports = class Exception {
  constructor(code = null, message = null, stackTrace = null) {
      this.code = code;
      this.message = message;
      this.stackTrace = stackTrace;
  }
};
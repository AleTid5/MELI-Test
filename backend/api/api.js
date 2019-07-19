const fetch = require('node-fetch');

/**
 * Base Api for external requests.
 * @type {module.Api}
 */
module.exports = class Api {
  constructor(url) {
    this.url = url;
  }

  async getFrom(uri) {
    return await fetch(this.url + uri)
        .then(response => {
          assertOrFail(200 >= response.status && response.status < 300, response.statusText);
          return response.json();
        })
        .then(data => data);
  }
};
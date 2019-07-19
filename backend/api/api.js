const fetch = require('node-fetch');

module.exports = class Api {
  constructor(url) {
    this.response = null;
    this.url = url;
  }

  async getFrom(uri) {
    await fetch(this.url + uri)
        .then(response => {
          assertOrFail(200 >= response.status && response.status < 300, response.statusText);
          return response.json();
        })
        .then(data => this.response = data);

    return this.response;
  }
};
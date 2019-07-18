const Response = require('./Response');
const { itemCleaner, categoryCleaner } = require('./Item');

module.exports = class Items extends Response {
  constructor(data) {
    super();
    this.transform(data);
  }

  transform(data) {
    this.data.categories = categoryCleaner(data.filters);
    this.data.items = [];
    data.results.map(item => this.data.items.push(itemCleaner(item)));
  }
};
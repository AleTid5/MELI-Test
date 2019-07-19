const config = require('./_config');
const Api = require('./api');

/**
 * Api of items.
 * @type {module.ApiItems}
 */
module.exports = class ApiItems extends Api {
  constructor() {
    super(config.apiURL);
  }

  async getItemById(itemId) {
    return await this.getFrom(config.paths.getItemPath(itemId));
  }

  async getItemDescriptionById(itemId) {
    return await this.getFrom(config.paths.getItemDescriptionPath(itemId));
  }

  async getItemsListByQuery(search) {
    return await this.getFrom(config.paths.getItemsListPath(search));
  }
};
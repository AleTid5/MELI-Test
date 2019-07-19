const ItemResponse = require('./item_response');

/**
 * The main transformer of an item list.
 * @type {module.ItemList}
 */
module.exports = class ItemList extends ItemResponse {
  constructor(data) {
    super();
    this.transform(data);
    return this.data;
  }

  /**
   * The transformer of the list of items.
   * @param data
   */
  transform(data) {
    this.data.categories = ItemResponse.categoryCleaner(data.filters);
    this.data.items = [];
    data.results.map(item => this.data.items.push(ItemResponse.itemCleaner(item)));
  }
};
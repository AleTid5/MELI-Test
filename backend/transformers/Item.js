const ItemResponse = require('./ItemResponse');

/**
 * The main transformer of a single item.
 * @type {module.Item}
 */
module.exports = class Item extends ItemResponse {
    constructor(data) {
        super();
        this.transform(data);
        return this.data;
    }

    /**
     * The transformer of the item description.
     * @param item
     */
    transform(item) {
        this.data.item = ItemResponse.itemCleaner(item);
    }
}
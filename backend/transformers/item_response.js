const Response = require('./response');

/**
 * The main object of any item transformed response.
 * @type {module.ItemResponse}
 */
module.exports = class ItemResponse extends Response{
  constructor() {
    super();
  }

  /**
   * The cleaner of a single item.
   * @param dirtyItem
   * @returns Object
   */
  static itemCleaner(dirtyItem) {
    const baseModel = {
      id: dirtyItem.id,
      title: dirtyItem.title,
      price: {
        currency: dirtyItem.currency_id,
        amount: dirtyItem.price,
        decimals: parseFloat((dirtyItem.price % 1).toFixed(2)), // Precisa y parsea
      },
      picture: dirtyItem.thumbnail,
      condition: dirtyItem.condition,
      free_shipping: dirtyItem.shipping.free_shipping
    };

    if (dirtyItem.description !== undefined) baseModel.description = dirtyItem.description;
    if (dirtyItem.sold_quantity !== undefined) baseModel.sold_quantity = dirtyItem.sold_quantity;

    return baseModel;
  };

  /**
   * The cleaner of the breadcrumb of categories.
   * @param dirtyBreadcrumb
   * @returns {Array}
   */
  static categoryCleaner(dirtyBreadcrumb) {
    const breadcrumbs = [];

    if (! dirtyBreadcrumb.length) return breadcrumbs;

    const categoryFilter = dirtyBreadcrumb.filter(filter => filter.id === 'category').shift();
    categoryFilter.values.map(category => {
      Object.keys(category.path_from_root).map(key => breadcrumbs.push(category.path_from_root[key].name));
    });

    return breadcrumbs;
  };
};
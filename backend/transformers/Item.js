const Response = require('./Response');

class Item extends Response {
    constructor(data) {
        super();
        this.transform(data);
    }

    transform(item) {
        this.data.item = itemCleaner(item);
    }
}

const itemCleaner = dirtyItem => {
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

const categoryCleaner = dirtyBreadcrumb => {
    const categoryFilter = dirtyBreadcrumb.filter(filter => filter.id === 'category').shift();
    const breadcrumb = [];
    categoryFilter.values.map(category => {
        Object.keys(category.path_from_root).map(key => breadcrumb.push(category.path_from_root[key].name));
    });

    return breadcrumb;
};

module.exports = { categoryCleaner, itemCleaner, Item };
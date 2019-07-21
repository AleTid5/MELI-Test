const items = require('../dummy/items');

module.exports = class ItemController {
    // Get all items
    static getAllItems(req, res) {
        return res.status(200).json(items);
    }

    // Get a single item
    static getSingleItem(req, res) {
        const item = items.items.find(item => item.id === req.params.id);

        if (item) return res.status(200).json(item);

        return res.status(404).json({
            message: "Student record not found",
        });
    }
};
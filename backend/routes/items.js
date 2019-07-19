const express = require('express');
const router = express.Router();
const ApiItems = require('../api/api_items');
const Item = require('../transformers/item');
const ItemList = require('../transformers/item_list');

const apiItems = new ApiItems();

const serverResponse = {
  status: 200,
  response: null
};

/**
 * Returns a list of searched items.
 */
router.get('/', async (req, res, next) => {
  try {
    const search = req.query.q;
    assertOrFail(search, 'No se ha enviado ningun parámetro de búsqueda.');
    const response = await apiItems.getItemsListByQuery(search);
    serverResponse.response = new ItemList(response);
  } catch (e) {
    serverResponse.status = e.code;
    serverResponse.response = { message: e.message };
  } finally {
    res.status(serverResponse.status).json(serverResponse.response);
  }
});

/**
 * Returns the description about a specific item.
 */
router.get('/:id', async (req, res, next) => {
  try {
    const itemId = req.params.id;
    assertOrFail(itemId, 'No se ha enviado ningun id de búsqueda.');
    const response = await apiItems.getItemById(itemId);
    response.description = (await apiItems.getItemDescriptionById(itemId)).plain_text;
    serverResponse.response = new Item(response);
  } catch (e) {
    serverResponse.status = e.code;
    serverResponse.response = { message: e.message };
  } finally {
    res.status(serverResponse.status).json(serverResponse.response);
  }
});

module.exports = router;

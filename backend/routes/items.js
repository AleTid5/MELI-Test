const express = require('express');
const router = express.Router();
const config = require('../config');
const Item = require('../transformers/Item');
const ItemList = require('../transformers/ItemList');

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
    const response = await getFrom(config.itemsList(search));
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
    const response = await getFrom(`/items/${itemId}`);
    response.description = (await getFrom(config.itemDescription(itemId))).plain_text;
    serverResponse.response = new Item(response);
  } catch (e) {
    serverResponse.status = e.code;
    serverResponse.response = { message: e.message };
  } finally {
    res.status(serverResponse.status).json(serverResponse.response);
  }
});

module.exports = router;

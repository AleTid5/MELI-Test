const express = require('express');
const router = express.Router();
const Items = require('../transformers/Items');
const { Item } = require('../transformers/Item');
const getFrom = require('../utils/helpers');

router.get('/', async (req, res, next) => {
  try {
    const search = req.query.q;

    assertOrFail(search, 'No se ha enviado ningun parámetro de búsqueda.');

    const response = await getFrom(`/sites/MLA/search?q=${search}&limit=4`);

    const items = new Items(response);

    res.json(items.flush());
  } catch (e) {
    res.json(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const itemId = req.params.id;

    assertOrFail(itemId, 'No se ha enviado ningun id de búsqueda.');

    const response = await getFrom(`/items/${itemId}`);
    response.description = (await getFrom(`/items/${itemId}/description`)).plain_text;

    const item = new Item(response);

    res.json(item.flush());
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;

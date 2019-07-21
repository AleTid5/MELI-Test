const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

router.get('/', (req, res) => ItemController.getAllItems(req, res));

router.get('/:id', (req, res) => ItemController.getSingleItem(req, res));

module.exports = router;
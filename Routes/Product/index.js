const express = require('express');
const router = express.Router();
const handler = require('./handler');
const authMiddleWare = require('../../MiddleWares/auth');

router.post('/product/new', handler.postProduct);
router.get('/product/:id', handler.getProductsById);
router.get('/products', handler.getAllProducts);

module.exports = router;
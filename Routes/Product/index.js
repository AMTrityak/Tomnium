const express = require('express');
const router = express.Router();
const handler = require('./handler');
const authMiddleWare = require('../../MiddleWares/auth');
const validation = require('./validation');

router.post('/product/new', validation.productValidation(),authMiddleWare.checkAuth(), handler.postProduct);
router.get('/product/:id', handler.getProductsById);
router.get('/products', handler.getAllProducts);

module.exports = router;
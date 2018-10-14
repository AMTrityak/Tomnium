const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.post('/user', handler.userRegistration);
router.get('/user', handler.checkUser);
router.get('/product/new', handler.getAccount);

module.exports = router;
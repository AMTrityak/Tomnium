const express = require('express');
const router = express.Router();
const handler = require('./handler');
const validation = require('./validation');

router.post('/user', validation.validationRegistr(), handler.userRegistration);
router.get('/user', handler.checkUser);
// router.get('/product/new', handler.getAccount);

module.exports = router;
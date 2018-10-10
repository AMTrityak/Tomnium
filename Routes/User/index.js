const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.post('/user', handler.postUser);
router.get('/user', handler.getUser);

module.exports = router;
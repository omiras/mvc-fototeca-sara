const express = require('express');
const tagControllers = require('../controllers/tag');

const router = express.Router();

router.get('/new-tag', tagControllers.getForm);

router.post('/new-tag', tagControllers.postForm);

module.exports = router;
const express = require('express');
const router = express.Router();

const fetchController = require('../controllers/fetchController');

router.post('/v1/fetch', fetchController.fetch);

module.exports = router;
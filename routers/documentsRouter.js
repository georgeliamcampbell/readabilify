const express = require('express');
const router = express.Router();

const documentsController = require('../controllers/documentsController');

router.post('/v1/documents/fetch', documentsController.fetch);

module.exports = router;
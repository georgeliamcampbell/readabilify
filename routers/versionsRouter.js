const express = require('express');
const router = express.Router();

const versionsController = require('../controllers/versionsController');

router.get('/v1/versions', versionsController.getAllVersions);

module.exports = router;
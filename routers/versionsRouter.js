const express = require('express');
const router = express.Router();

const versionsController = require('../controllers/versionsController');

/**
 * @swagger
 * /api/v1/versions:
 *   get:
 *     summary: Get version information
 *     description: Returns version information
 *     tags:
 *       - Versions
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
router.get('/v1/versions', versionsController.getAllVersions);

module.exports = router;
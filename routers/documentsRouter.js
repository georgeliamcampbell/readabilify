const express = require('express');
const router = express.Router();

const documentsController = require('../controllers/documentsController');

/**
 * @swagger
 * /api/v1/documents/fetch:
 *   post:
 *     summary: Fetches content from a given URL
 *     description: Fetches content from a given URL
 *     tags:
 *       - Documents
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL to fetch data from
 *             required:
 *               - url
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal server error
 */
router.post('/v1/documents/fetch', documentsController.fetch);

module.exports = router;
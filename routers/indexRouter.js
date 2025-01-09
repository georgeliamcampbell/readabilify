const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/swagger');
});

module.exports = router;
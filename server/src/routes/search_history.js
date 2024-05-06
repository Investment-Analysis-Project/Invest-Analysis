const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');
const searchController = require('../controllers/search_history');

router.post('/get', searchController.getPeviousSearch);
router.post('/add', searchController.addToHistory);
module.exports = router;
const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');
const searchController = require('../controllers/search_history');

// Protected route that requires authentication
router.get('/', verify.verifyUser, searchController.getPeviousSearch);
router.post('/', verify.verifyUser,  searchController.addToHistory);
module.exports = router;
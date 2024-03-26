const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');
const searchController = require('../controllers/search');

// Protected route that requires authentication
router.get('/', verify.verifyUser, searchController.previousSearch);

module.exports = router;
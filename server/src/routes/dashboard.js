const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');
const dashboardController = require('../controllers/dashboard');

// Protected route that requires authentication
router.get('/', verify.verifyUser, dashboardController.content);
module.exports = router;
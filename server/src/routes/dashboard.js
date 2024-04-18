const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');
const dashboardController = require('../controllers/dashboard');

router.get('/', dashboardController.content);
module.exports = router;
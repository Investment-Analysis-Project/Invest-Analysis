const express = require('express');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');
const searchController = require('../controllers/search');

// Protected route that requires authentication
router.get('/', verifyToken, searchController.previousSearch);
router.get('/protected', verifyToken, (req, res) => {
    // Access the authenticated user information from req.user
    res.json({ success: true, message: 'Access granted to protected route.', user: req.user });
});

module.exports = router;

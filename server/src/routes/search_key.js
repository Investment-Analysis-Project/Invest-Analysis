const express=require('express');
const router=express.Router();
const searchController = require('../controllers/search_key')
const verify = require('../utils/verifyToken');

router.get('/:keyword', verify.verifyUser, searchController.recent_news);

module.exports = router;
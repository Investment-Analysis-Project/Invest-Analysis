const express=require('express');
const router=express.Router();
const apiController = require('../controllers/api'); 
const verify = require('../utils/verifyToken');
const log = require('../utils/logApi');



router.get('/generateKey',verify.verifyUser,apiController.generateKey);
router.get('/getKeys',verify.verifyUser, apiController.getKeys);
router.get('/getData',[verify.verifyApiToken,log.logApiUsage], apiController.getData);


module.exports = router;
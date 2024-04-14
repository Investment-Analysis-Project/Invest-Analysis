const createSuccess = require('../utils/success');
const createError = require('../utils/error');

const test =  async (req, res, next) => {
    try {  
        res.json(createSuccess(200,"Test Connection Successful!",data));
    } catch (error) {
        console.log(error)
        next(createError(500,error));
    }
    
}

module.exports = {test}
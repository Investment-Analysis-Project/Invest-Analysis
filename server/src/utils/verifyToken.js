const jwt = require('jsonwebtoken');
const createError = require('./error');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (!token || token=="null") {
        return next(createError(401, 'Access denied. No token provided.'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(createError(401, 'Invalid token.'));
        }
        req.user = decoded;
        next();
    });
};

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,(error)=>{
        if(error) {
            return next(error); 
        }

        if(req.user.user_id===parseInt(parseInt(req.query.id))){  
            next();
        }
        else{
           return next(createError(401,"You are not authorized user !"));
        }
    });
}

const verifyApiToken = (req, res, next) => {

    const token = req.query.api_key;
    // const token = req.headers('x-api-key');


    if (!token || token=="null") {
        return next(createError(401, 'Access denied. No token provided.'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(createError(401, 'Invalid token.'));
        }
        req.user = decoded;
        next();
    });
};

module.exports = {verifyToken,verifyUser,verifyApiToken};
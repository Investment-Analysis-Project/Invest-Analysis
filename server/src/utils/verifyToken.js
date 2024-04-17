const jwt = require('jsonwebtoken');
const createError = require('./error');

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (token==="null") {
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
    verifyToken(req,res,()=>{
        if(req.user.user_id===parseInt(parseInt(req.query.id))){  
            next();
        }
        else{
            return next(createError(401,"You are not authorized user !"));
        }
    });
}

module.exports = {verifyToken,verifyUser};
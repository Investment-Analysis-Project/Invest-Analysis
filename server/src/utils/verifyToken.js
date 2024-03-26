const jwt = require('jsonwebtoken');
const createError = require('./error');

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
    // Extract the token from the request headers, query parameters, or cookies
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

    if (!token) {
        // If token is not provided, return an error response
        next(createError(401, 'Access denied. No token provided.'));
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            // If token is invalid, return an error response
            next(createError(401, 'Invalid token.'));
        }

        // If token is valid, attach the decoded token payload to the request object
        req.user = decoded;
        next(); // Move to the next middleware or route handler
    });
};

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.user_id===parseInt(req.query.id)){  
            next();
        }
        else{
            return next(createError(401,"You are not authorized user !"));
        }
    });
}

module.exports = {verifyToken,verifyUser};
const db = require('../db');

const logApiUsage = async (req, res, next) => {
    try {
        // Extract relevant information from the request
        const userId = req.user.id; // Assuming user information is available in the request
        const method = req.method;
        const url = req.originalUrl;
        const userAgent = req.headers['user-agent'];

        // Insert API usage information into the database
        await db.query('INSERT INTO api_usage (user_id, method, url, user_agent) VALUES ($1, $2, $3, $4)', [userId, method, url, userAgent]);

        // Call the next middleware
        next();
    } catch (error) {
        // Handle any errors
        console.error('Error logging API usage:', error);
        next(createError(500,"Internal Server Error"));

    }
};

module.exports = {logApiUsage};
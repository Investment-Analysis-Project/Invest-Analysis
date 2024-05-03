const jwt=require('jsonwebtoken');
const db = require('../db');
const bcrypt = require('bcrypt');
const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const { v4: uuidv4 } = require('uuid');

const generateKey = async (req,res,next) => {
    try {
        const secretKey = process.env.JWT_SECRET;

        // Assuming you have some user information available in the request
        const userId = req.user.user_id;
        const expirationDate = new Date(Date.now() + (6 * 30 * 24 * 60 * 60 * 1000)); // 6 months from now

        // Create the payload for the token (you can include any user-related information)
        const payload = {
            id: userId
        };

        // Generate the token with expiration time set to 6 months
        const token = jwt.sign(payload, secretKey, { expiresIn: '6m', jwtid: uuidv4(), encoding: 'utf-8', algorithm: 'HS256' });

        // Store the token and its expiration date in the database
        await db.query('INSERT INTO auth_tokens (user_id, token, expiration_date) VALUES ($1, $2, $3)', [userId, token, expirationDate]);

        // Respond with the generated token
        res.json(createSuccess(201,"Key Generated", {token: token}));
    } catch (error) {
        // Handle any errors
        console.error(error);
        next(createError(500,"There was an error while key generation"));
    }
}

const getKeys = async (req,res,next) => {
    try {
        const userId = req.user.id;

        // Retrieve the token information associated with the user from the database
        const tokens = await db.query('SELECT * FROM auth_tokens WHERE user_id = $1', [userId]);

        // Extract relevant information (such as token, expiration date) and send the response
        const keys = tokens.rows.map(token => ({
            id: token.id,
            token: token.hashed_token, // Or you can send the hashed token if required
            expiration_date: token.expiration_date
        }));

        res.json({ success: true, keys: keys });
    } catch (error) {
        // Handle any errors
        console.error(error);
        next(createError(500,"There was an error while key retrival"));

    }
}

const getAnalytics = async (req,res,next) => {
    try {
        
    } catch (error) {
        
    }
}

const getData = async (req,res,next) => {
    try { 

        data = {
            company: req.query.q,
            timeframe: req.query.tf,
            geo: req.query.geo || "World Wide",
        }

        res.json(createSuccess(200,"Test Connection Successful!",data));
    } catch (error) {
        console.log(error)
        next(createError(500,error));
    }
}

module.exports = {generateKey, getKeys, getAnalytics, getData}
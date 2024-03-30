const jwt=require('jsonwebtoken');
const db = require('../db');
const bcrypt = require('bcrypt');
const createError = require('../utils/error');
const createSuccess = require('../utils/success');

const login = async(req,res,next)=>{
    try{
        const {user_name,user_password}=req.body;
    
        const user = await db.query('SELECT * FROM usertable where user_name=$1',[user_name]);
        if(user.rowCount===0) return next(createError(404,"User not found ! Create an account."));   
     
        const storedPasswordHash = user.rows[0].user_password;
        const passwordMatch = await bcrypt.compare(user_password, storedPasswordHash);
        if (!passwordMatch) return next(createError(404, "Incorrect password."));

        const user_log={
            user_id:user.rows[0].user_id,
            user_name:user.rows[0].user_name,
            isadmin:user.rows[0].is_admin
        }

        const token=jwt.sign(user_log,process.env.JWT_SECRET,{expiresIn:"24h"});
        
        res.json(createSuccess(200,"Login Success",{token}));
    }catch(err){
        console.log(err);
        next(createError(500,"Server Error"));
    }
};

const create = async(req,res,next)=>{
    try{
        const {user_name,user_password,email} = req.body;

        const user = await db.query('SELECT * FROM usertable where user_name=$1',[user_name]);
        if(user.rowCount===1) return next(createError(404,"User already exists.")); 

        const hashedPassword = await bcrypt.hash(user_password,10);

        const {rows} = await db.query('INSERT INTO usertable (user_name,user_password,email) values ($1,$2,$3) RETURNING user_id',[user_name,hashedPassword,email]);
        
        res.json(createSuccess(201,"User Created",{user_name:rows[0].user_name,user_id:rows[0].user_id}));
    }catch(err){
        console.log(err);
        next(createError(500,"Server Error"));
    }
}

module.exports = {login,create};
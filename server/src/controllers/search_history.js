const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const db = require( '../db' );
const capitalizeWords = require('../utils/capitalize')

const getPeviousSearch = async(req,res,next)=>{
    try{
        const user_id = req.user.user_id;

        const result = await db.query("SELECT search_query FROM searchhistory WHERE user_id = $1 ORDER BY search_timestamp DESC", [user_id]);

        var recent_search = result.rows.map(item => item.search_query);
        console.log(recent_search)
        recent_search = recent_search.map(elements => {
            return capitalizeWords(elements);
        })
        const data = {
            user: req.user,
            recent_search: recent_search
        }
    
        res.json(createSuccess(200,"Previous Search",data ));
    }catch(err){
        console.log(err);
        next(createError(500,"Server Error"));
    }
}

const addToHistory = async(req,res,next) => {
    try {
        var { user_id, query} = req.body;

        query = query.toLowerCase();

        const existingEntry = await db.query('SELECT * FROM searchhistory WHERE user_id = $1 AND search_query = $2', [user_id, query]);
        
        if (existingEntry.rows.length > 0) {
            // If the search query already exists, update the timestamp
            await db.query('UPDATE searchhistory SET search_timestamp = NOW() WHERE user_id = $1 AND search_query = $2', [user_id, query]);
            res.json(createSuccess(201,"Search history updated successfully"));
        } else {
            // If the search query does not exist, insert a new entry
            const result = await db.query('INSERT INTO searchhistory (user_id, search_query) VALUES ($1, $2) RETURNING *', [user_id, query]);
            res.json(createSuccess(201,"Search history added successfully"));
        }
    } catch (error) {
        console.log(error);
        next(createError(500,"Server Error"));
    }
}

module.exports={getPeviousSearch, addToHistory};

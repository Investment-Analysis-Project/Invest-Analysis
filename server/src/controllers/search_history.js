const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const db = require( '../db' );
const capitalizeWords = require('../utils/capitalize')

const getPeviousSearch = async(req,res,next)=>{
    try{
        const {user_id} = req.body;
  
        const result = await db.query("SELECT search_query,search_timestamp FROM searchhistory WHERE user_id = $1 ORDER BY search_timestamp DESC", [user_id]);

        var recent_search = result.rows.map(item => ({ search_query: capitalizeWords(item.search_query), search_timestamp: item.search_timestamp }));

        const data = {
            user: req.user,
            recent_search: recent_search
        }
    
        res.json(createSuccess(200,"Previous Search",data ));
    }catch(err){
        console.log('\n'+"Error while fectching history"+'\n'+err.where+'\n');
        next(createError(500,"There was an error while fetching the history !"));
    }
}

const addToHistory = async(req,res,next) => {
    try {
        let {user_id,query} = req.body;

        query = query.toLowerCase();

        let existingEntry = await db.query('SELECT * FROM searchhistory WHERE user_id = $1 AND search_query = $2', [user_id, query]);
        
        if (existingEntry.rows.length > 0) {
            await db.query('UPDATE searchhistory SET search_timestamp = NOW() WHERE user_id = $1 AND search_query = $2', [user_id, query]);
            res.json(createSuccess(201,"Search history updated successfully"));
        } else {
            const result = await db.query('INSERT INTO searchhistory (user_id, search_query) VALUES ($1, $2) RETURNING *', [user_id, query]);
            res.json(createSuccess(201,"Search history added successfully"));
        }
    } catch (err) {
        console.log('\n'+"Error while adding history"+'\n'+err.where+'\n');
        next(createError(500,"There was an error while updating data"));
    }
}

module.exports={getPeviousSearch, addToHistory};
const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const getTrends = require('../utils/trends');

const content = async(req,res,next)=>{
    try{
        const result = await getTrends(req.query.q,req.query.tf);

        const contents = 
        {
            company: req.query.q,
            timeframe: req.query.tf,
            geo: req.query.geo || "World Wide",
            peak_search: result.maxKeys,
            peak_intrest: result.maxValue,
        }
        
        const data = {
            contents: contents
        }
        res.json(createSuccess(200,"Dashboard Data",data ));
    }catch(err){
        console.log('\n'+"Google Trends Error"+'\n'+err.where+'\n');
        return next(createError(500,"Ooops...! There was an error while fetching Google Trends Data"));
    }
}

module.exports={content};
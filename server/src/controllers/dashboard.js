const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const getTrends = require('../utils/trends');


const content = async(req,res,next)=>{
    try{
        result = await getTrends(req.query.q,req.query.tf);
        console.log(result);
        const contents = 
        {
            company: req.query.q,
            sentiment: "positive",
            timeframe: req.query.tf,
            geo: req.query.geo||"World Wide",
            total_searches: 100,
            peak_search: result.maxKeys,
            peak_intrest: result.maxValue,
            recent_news: ["link.com","link.com","link.com"],
            related_companies: ["Pepsi","Adani","Coke"]
        }
        const data = {
            user: req.user,
            contents: contents
        }
    
        res.json(createSuccess(200,"Dashboard Data",data ));
    }catch(err){
        console.log(err);
        next(createError(500,"Server Error"));
    }
}

module.exports={content};
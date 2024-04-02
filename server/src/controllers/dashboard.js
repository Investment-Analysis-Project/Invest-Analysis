const createError = require('../utils/error');
const createSuccess = require('../utils/success');


const content = async(req,res,next)=>{
    try{

        const contents = 
        {
            company: req.query.q,
            sentiment: "positive",
            timeframe: req.query.tf,
            geo: req.query.geo||"World Wide",
            total_searches: 100,
            peak_search: "01-01-2024",
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
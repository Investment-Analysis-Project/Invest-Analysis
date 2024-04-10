const createError = require('../utils/error');
const createSuccess = require('../utils/success');


const previousSearch = async(req,res,next)=>{
    try{

        const recent_search = ["Pepsi","Coke", "Adani"]
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

module.exports={previousSearch};
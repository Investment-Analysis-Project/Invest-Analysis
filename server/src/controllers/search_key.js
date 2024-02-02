const createError = require('../utils/error');
const axios = require('axios');

const recent_news = async(req,res,next)=>{
    try{
        const {keyword}=req.params;
        
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&searchIn=title&from=2024-01-20&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        
        const five_news = response.data.articles.slice(0,5);
        const newsArray = [];
        five_news.forEach(news => {
            const {url,title} = news;
            newsArray.push({url,title});
        });

        processNewsArray(newsArray);

    }catch(err){
        console.log(err);
    }
};

const processNewsArray = async(newsArray)=>
{
    newsArray.forEach((news)=>{
        query({"inputs": news.title},news);
    });
};

const query = async(data,news)=>
{
    try{
        const response1 = await fetch(
        "https://api-inference.huggingface.co/models/ProsusAI/finbert",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        });

        const response2 = await fetch(
        "https://api-inference.huggingface.co/models/mdarhri00/named-entity-recognition",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        });

        const result1 = await response1.json();
        const result2 = await response2.json();
        console.log(news.title);
        console.log(result1[0][0]);
        console.log(result2);
        console.log("\n\n")
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
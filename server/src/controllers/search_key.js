const createError = require('../utils/error');
const axios = require('axios');

let resultArray = [];

const recent_news = async(req,res,next)=>{
    try{
        const {keyword}=req.params;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&excludeDomains=engadget.com&searchIn=title&sortBy=relevancy&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);

        const five_news = response.data.articles.slice(0,6);
        const newsArray = [];
        five_news.forEach(news => {
            const {url,title} = news;
            newsArray.push({url,title});
        });

        const x = await processNewsArray(newsArray);

        if(x.length)
            res.json(x);
    }catch(err){
        console.log(err);
    }
};

const processNewsArray = async(newsArray)=>
{
    resultArray = [];

    for (let i = 0; i <newsArray.length; i++){
        const news = newsArray[i];
        await query({"inputs": news.title},news);
    }
    
    return resultArray;
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
        
        const news_title=news.title;
        const news_url=news.url;
        const news_sentiment=result1[0][0];
        const news_entities=result2;
        resultArray.push({news_title,news_url,news_sentiment,news_entities});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
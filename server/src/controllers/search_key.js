const createError = require('../utils/error');
const axios = require('axios');

let resultArray = []

const recent_news = async(req,res,next)=>{
    try{
        const {keyword}=req.params;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&domains=cnbc.com&searchIn=title&sortBy=relevancy&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        const five_news = response.data.articles.slice(0,9);
        
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

    for (let i=0;i<newsArray.length;i++)
    {
        const news = newsArray[i];
        const response = await fetch('http://127.0.0.1:5000/scrap',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({url:news.url})
        });
        const news_scraped = await response.json();
        await query(news_scraped,news);
    }
    return resultArray; 
};

const query = async(news_scraped,news)=>
{
    try{
        const news_entities = []

        const response1 = await fetch('http://127.0.0.1:4001/senti',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text_sentences:news_scraped})
        });

        const result1 = await response1.json();
        const news_sentiment = result1

        for(let i=0;i<news_scraped.length;i++)
        {
            const response2 = await fetch('http://127.0.0.1:4001/entities',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({text:news_scraped[i]})
            });

            const result2 = await response2.json();
            news_entities.push(result2)
        }
        const news_title=news.title;
        const news_url=news.url;
        resultArray.push({news_title,news_url,news_sentiment,news_entities});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
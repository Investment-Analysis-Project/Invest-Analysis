const createError = require('../utils/error');
const axios = require('axios');

let resultArray = []

const recent_news = async(req,res,next)=>{
    const five_news = []
    
    try{
        const {keyword}=req.params;
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&domains=cnbc.com&searchIn=title&sortBy=relevancy&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        const five_news = response.data.articles.slice(0,5);
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

    for (let i = 2; i <newsArray.length; i++)
    {
        const news = newsArray[2];
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
        let news_sentiment_array=[];
        let news_entities=[];

        for(let i=0;i<news_scraped.length;i++)
        {
            console.log(news_scraped[i])

            const response1 = await fetch(
            "https://api-inference.huggingface.co/models/ProsusAI/finbert",
            {
                //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
                //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
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({"inputs":news_scraped[i]})
            });

            const response2 = await fetch(
            "https://api-inference.huggingface.co/models/dslim/bert-base-NER",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({"inputs":news_scraped[i]}),
            });

            const result1 = await response1.json();
            const result2 = await response2.json();

            console.log(result1)
            news_sentiment_array.push(result1[0][0].label);
            news_entities.push(result2);
        }
 
        const findMajorityElement = (arr) => 
        {
            let count = 0;
            let candidate = '';
        
            for (let i = 0; i < arr.length; i++) 
            {
                if (count === 0)
                    candidate = arr[i];
                
                if (arr[i] === candidate) 
                    count++;
                else 
                    count--;  
            }
    
            count = 0;
            for (let i = 0; i < arr.length; i++) 
                if (arr[i] === candidate) 
                    count++;

            console.log(candidate);
            return candidate;
        }
        
        const news_sentiment = findMajorityElement(news_sentiment_array);

        const news_title=news.title;
        const news_url=news.url;
        resultArray.push({news_title,news_url,news_sentiment,news_entities});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
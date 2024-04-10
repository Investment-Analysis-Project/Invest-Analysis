const createError = require('../utils/error');
const axios = require('axios');

let resultArray = [{
    "news_title": "Strong Buy Alert! Why Alphabet Stock Will Leap Higher in 2024",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Positive",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-14T09:46:00Z"
},
{
    "news_title": "Strong Buy Alert! Why Alphabet Stock Will Leap Higher in 2024",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Negative",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-27T14:07:00Z"
},
{
    "news_title": "Strong Buy Alert! Why Alphabet Stock Will Leap Higher in 2024",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Positive",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-26T17:24:00Z"
},
{
    "news_title": "Google adds more AI in shopping.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Positive",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-15T14:27:00Z"
},
{
    "news_title": "Google adds more AI in shopping.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Positive",
            "score": 0.8970250487327576
        },
    "news_time":"2024-04-08T23:20:33Z"
},
{
    "news_title": "Google adds more AI in shopping.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Negative",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-21T22:43:02Z"
},
{
    "news_title": "With Vids, Google thinks it has the next big productivity tool for work.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Neutral",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-12T19:50:15Z"
},
{
    "news_title": "With Vids, Google thinks it has the next big productivity tool for work.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Neutral",
            "score": 0.8970250487327576
        },
    "news_time":"2024-03-22T18:30:09Z"
},
{
    "news_title": "With Vids, Google thinks it has the next big productivity tool for work.",
    "news_url": "https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style",
    "news_sentiment": 
        {
            "sentiment": "Neutral",
            "score": 0.8970250487327576
        },
    "news_time":"2024-04-02T14:02:53Z"
}];

const recent_news = async(req,res,next)=>{
    try{
        const {time} =req.query;
        const {keyword}=req.params;

        // const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&domains=cnbc.com&searchIn=title&sortBy=relevancy&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        // const five_news = response.data.articles.slice(0,9);
        
        // const newsArray = [];
        // five_news.forEach(news => {
        //     const {url,title,publishedAt,urlToImage} = news;
        //     newsArray.push({url,title,publishedAt,urlToImage});
        // });
            
        //const x = await processNewsArray(newsArray);

        // if(x.length)
        //     res.json(x);
        res.json(resultArray);
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
        const news_time=news.publishedAt;
        const news_img=news.news_img_url
        resultArray.push({news_title,news_url,news_sentiment,news_entities,news_time,news_img});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
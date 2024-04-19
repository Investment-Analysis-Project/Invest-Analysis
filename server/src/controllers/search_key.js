const createError = require('../utils/error');
const createSuccess = require('../utils/success');
const axios = require('axios');

let resultArray = [];

const recent_news = async(req,res,next)=>{
    try{
        const {time} =req.query;
        const {keyword}=req.params;

        //dd4dcc554dd94d61820961820e342242
        //afcd39b2d9c546cc9293d168cee038e7

        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&excludeDomains=engadget.com,yahoo.com&searchIn=title&from=2024-04-18&to=2024-03-18&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);
        const five_news = response.data.articles.slice(0,10);
        
        const newsArray = [];
        five_news.forEach(news => {
            const {url,title,publishedAt,urlToImage} = news;
            newsArray.push({url,title,publishedAt,urlToImage});
        });
            
        const x = await processNewsArray(newsArray);

        if(x.length)
        {
            x.sort((a,b)=>a.news_time.localeCompare(b.news_time))
            res.json(createSuccess(200,"Previous Search",x));
        }
        else
            throw new Error('This is an error');

        // resultArray.sort((a,b)=>a.news_time.localeCompare(b.news_time));
        // res.json(createSuccess(200,"Previous Search",resultArray ));
    }catch(err){
        console.log('\n'+"Error while fectching news"+'\n'+err.where+'\n');
        next(createError(500,"Ooops...! There was an error while processing."));
    }
};

const processNewsArray = async(newsArray)=>
{
    resultArray = [];

    for (let i=0,count=0;i<newsArray.length && count<10;i++)
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

        if(news_scraped.status=='false')
            continue;

        count++;

        await query(news_scraped.news_array,news);
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
        console.log('\n'+"Error while excecuting model"+'\n'+err.where+'\n');
        next(createError(500,"Ooops...! There was an error while processing the data"));
    }
}
          
module.exports = {recent_news};
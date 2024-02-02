const createError = require('../utils/error');
const jwt=require('jsonwebtoken');
const db = require('../db');
const axios = require('axios');

const recent_news = async(req,res,next)=>{
    try{
        const {keyword}=req.params;

        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&searchIn=title&from=2024-01-20&language=en&sortBy=relevancy&apiKey=dd4dcc554dd94d61820961820e342242`);

        const five_news = response.data.articles.slice(0, 5);
        const newsArray = [];

        five_news.forEach(news => {
            const {url,title} = news;
            newsArray.push({url,title});
        });

        console.log(newsArray);
    }catch(err){
        console.log(err);
    }
};

module.exports = {recent_news};
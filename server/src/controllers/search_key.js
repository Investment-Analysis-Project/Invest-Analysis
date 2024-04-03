const createError = require('../utils/error');
const axios = require('axios');

let resultArray = []

const recent_news = async(req,res,next)=>{
    const five_news = []
    //     {
    //       source: { id: 'the-verge', name: 'The Verge' },
    //       author: 'Emilia David',
    //       title: 'Google adds more AI in shopping',
    //       description: 'Now available in the US, shoppers on Google’s app or on mobile can rate items and search for clothing based on an AI-generated image.',
    //       url: 'https://www.theverge.com/2024/3/27/24113485/google-shopping-generative-ai-image-generation-rating-style',
    //       urlToImage: 'https://cdn.vox-cdn.com/thumbor/ZtCF0RGneZml3juzavvw2_dAa5M=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016883/STK093_Google_06.jpg',
    //       publishedAt: '2024-03-27T16:00:00Z',
    //       content: 'Google adds more AI in shopping\r\n' +
    //         'Google adds more AI in shopping\r\n' +
    //         ' / Shoppers can now rate the items they find in search to find more of the stuff they actually like. \r\n' +
    //         'ByEmilia David, a reporter who… [+1795 chars]'
    //     },
    //     {
    //       source: { id: 'wired', name: 'Wired' },
    //       author: 'Steven Levy',
    //       title: '8 Google Employees Invented Modern AI. Here’s the Inside Story',
    //       description: 'They met by chance, got hooked on an idea, and wrote the “Transformers” paper—the most consequential tech breakthrough in recent history.',
    //       url: 'https://www.wired.com/story/eight-google-employees-invented-modern-ai-transformers-paper/',
    //       urlToImage: 'https://media.wired.com/photos/65f35e827465bc8a4736d29d/191:100/w_1280,c_limit/Transformers-Social.jpg',
    //       publishedAt: '2024-03-20T10:00:00Z',
    //       content: 'The last two weeks before the deadline were frantic. Though officially some of the team still had desks in Building 1945, they mostly worked in 1965 because it had a better espresso machine in the mi… [+2954 chars]'
    //     },
    //     {
    //       source: { id: 'wired', name: 'Wired' },
    //       author: 'Matt Burgess',
    //       title: 'Google Is Getting Thousands of Deepfake Porn Complaints',
    //       description: 'Content creators are using copyright laws to get nonconsensual deepfakes removed from the web. With the complaints covering nearly 30,000 URLs, experts say Google should do more to help.',
    //       url: 'https://www.wired.com/story/google-deepfake-porn-dmca-takedowns/',
    //       urlToImage: 'https://media.wired.com/photos/65eb60da40d8c63d24f03206/191:100/w_1280,c_limit/Deepfake-Porn-Google-Security-GettyImages-1408253641.jpg',
    //       publishedAt: '2024-03-11T07:00:00Z',
    //       content: 'Each method is weaponizedalmost always against womento degrade, harass, or cause shame, among other harms. Julie Inman Grant, Australias e-safety commissioner, says her office is starting to see more… [+3756 chars]'
    //     },
    //     {
    //       source: { id: 'wired', name: 'Wired' },
    //       author: "Kate O'Flaherty",
    //       title: 'You Should Update Apple iOS and Google Chrome ASAP',
    //       description: 'Plus: Microsoft patches over 60 vulnerabilities, Mozilla fixes two Firefox zero-day bugs, Google patches 40 issues in Android, and more.',
    //       url: 'https://www.wired.com/story/apple-ios-google-chrome-critical-update-march/',
    //       urlToImage: 'https://media.wired.com/photos/66072aed36e307ecf6fc3e75/191:100/w_1280,c_limit/032924-security-critical-updates-march.jpg',
    //       publishedAt: '2024-03-31T10:00:00Z',
    //       content: 'Its time to check your software updates. March has seen the release of important patches for Apples iOS, Googles Chrome, and its privacy-conscious competitor Firefox. Bugs have also been squashed by … [+3528 chars]'
    //     },
    //     {
    //       source: { id: 'the-verge', name: 'The Verge' },
    //       author: 'Jon Porter',
    //       title: 'Apple’s AI ambitions could include Google or OpenAI',
    //       description: 'Apple has reportedly held discussions with Google to bring its Gemini generative AI technology to the iPhone and has also considered using OpenAI’s ChatGPT.',
    //       url: 'https://www.theverge.com/2024/3/18/24104626/apple-license-google-gemini-generative-ai-openai-chatgpt',
    //       urlToImage: 'https://cdn.vox-cdn.com/thumbor/AznF8_8PWIM-17iDULo4aihqkv8=/0x0:20400x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24931975/236794_iPhone_15_pro_pro_Max_VPavic_0019.jpg',
    //       publishedAt: '2024-03-18T09:30:34Z',
    //       content: 'Apples AI ambitions could include Google or OpenAI\r\n' +
    //         'Apples AI ambitions could include Google or OpenAI\r\n' +
    //         ' / The iPhone-maker is in active talks to bring Gemini to the iPhone, and has also considered u… [+2452 chars]'
    //     }
    //   ]

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

    for (let i = 0; i <newsArray.length; i++)
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
        let news_sentiment_array=[];
        let news_entities=[];

        for(let i=0;i<news_scraped.length;i++)
        {
            const response1 = await fetch(
            "https://api-inference.huggingface.co/models/ProsusAI/finbert",
            {
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

            return candidate;
        }
        
        const news_sentiment = await findMajorityElement(news_sentiment_array);

        const news_title=news.title;
        const news_url=news.url;
        resultArray.push({news_title,news_url,news_sentiment,news_entities});
    }catch(err){
        console.log(err)
    }
}
          
module.exports = {recent_news};
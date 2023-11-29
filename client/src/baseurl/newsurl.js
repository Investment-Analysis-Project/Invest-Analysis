import axios from "axios";

export default axios.create({
    newsURL:"https://newsapi.org/v2/everything?q=business&sortBy=popularity&apiKey=dd4dcc554dd94d61820961820e342242"
});
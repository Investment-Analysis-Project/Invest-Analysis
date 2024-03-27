require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const auth_routes = require('./src/routes/auth');
const search_key = require('./src/routes/search_key');
const search = require('./src/routes/search');
const dashboard = require('./src/routes/dashboard');

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',auth_routes);
app.use('/api/search_key',search_key);
app.use('/api/previoussearch',search);
app.use('/api/dashboard',dashboard);

app.use((err,req,res,next)=>{ 
    const errorStatus = err.status|| 500;
    const errorMessage = err.message|| "Something went wrong!";
    res.json({
      success:false,
      status:errorStatus,
      message:errorMessage,
      stack:err.stack, 
    });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`View devoplment server at http://localhost:${PORT}/`);
});
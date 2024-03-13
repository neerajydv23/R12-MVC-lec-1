require('dotenv').config({path:"./.env"})
const express = require('express')
const app = express()

require('./models/dbconfig.js').connectDB();





app.listen(process.env.PORT,()=>{
    console.log( `Server running on PORT ${process.env.PORT}`);
})
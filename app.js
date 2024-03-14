require('dotenv').config({path:"./.env"})
const express = require('express')
const app = express()

require('./models/dbconfig.js').connectDB();

const userRouter = require('./routes/userRouter.js')
//logger
app.use(require("morgan")("tiny"));
// body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/user',userRouter);






app.listen(process.env.PORT,()=>{
    console.log( `Server running on PORT ${process.env.PORT}`);
})
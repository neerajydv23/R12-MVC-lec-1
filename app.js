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

app.all("*",function(req,res,next){
    res.status(404).json({success:false,message:`${req.url} route not found`});
})




app.listen(process.env.PORT,()=>{
    console.log( `Server running on PORT ${process.env.PORT}`);
})
const mongoose = require('mongoose');
require('dotenv').config({path:"./.env"})

exports.connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}



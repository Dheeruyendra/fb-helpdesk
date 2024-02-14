const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DBConnection = async () =>{
      const MONGO_URL = process.env.MONGO_URL;
      try{
        await mongoose.connect(MONGO_URL);
        console.log('Database connected successfully!');
      }
      catch(err){
        console.error('Error connecting to database:', err);
        throw err; 
      }
}
module.exports = DBConnection;
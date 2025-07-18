const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

//import packages



dotenv.config();


connectDB();
//REST OBJECT

const app = express();


//middlewares

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));



//routs
app.use("/api/v1/auth", require("./routes/userRoutes"));
    
//port
const PORT = process.env.PORT || 8080;


//listen

app.listen(PORT,() =>{
    console.log(`Server Running ${PORT}`.bgGreen.white);
}
);

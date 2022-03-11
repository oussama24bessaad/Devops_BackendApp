const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
require('dotenv').config()
app.use(express.json())

// const connectDB = require('./helpers/connectDB');
//   connectDB();
// mongoose.connect(process.env.MONGO_URI,(err)=>(
//  err ? console.log(err) : console.log('database connected')
// )) 

// //mongoose setup
const connectDB = require('./helpers/connectDB');
connectDB();

const User = require('./models/userModel')
// const { connect } = require('./routes/userRoutes')


// routes
app.use('/api/users',require('./routes/userRoutes'))
// User.create({name:'oussama',email:'oussama24bessaad@gmail.com'})

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on port ${port}`);
});
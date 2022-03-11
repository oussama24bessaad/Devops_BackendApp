const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = () => {
  const mongoUri = `mongodb://${process.env.USER_NAME}:${process.env.USR_PWD}@${process.env.MONGO_URL}:27017/db?authSource=admin`
  console.log(mongoUri)
  mongoose
    .connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.port || 5000;
const mongoDBURI = process.env.MONGODB_URI;

if (!mongoDBURI) {
  console.error('MongoDB connection string is missing in the environment variables.');
  process.exit(1); // Exit the application if connection string is not provided
}

mongoose.connect(mongoDBURI,{
    useNewURlParser:true,                   //connect to MongoDb
    useUnifiedTopology: true,
})

app.use('/api/blogs',blogRoutes);

app.listen(PORT,() => {
    console.log(`Server running on${PORT}`);
})
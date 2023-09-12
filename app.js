// Delete the words "MongoDB URl here" Without Quotation and type your Mongodb Url 
const database_url = "mongodb://127.0.0.1:27017/twc-test";
//****************************************************************** */

// Importing required modules and packages
const express = require("express"); // Importing Express web framework
const bodyParser = require("body-parser"); // Middleware to parse request bodies
const mongoose = require("mongoose"); // MongoDB Object Modeling tool
const cors = require('cors'); // Middleware for enabling CORS (Cross-Origin Resource Sharing)

// get the user Model
const The_User = require('./models/User_Model')

const app = express(); // Initializing Express application
app.use(bodyParser.json()); // Configuring Express to use JSON as the request body parser


app.use(cors()); // Enabling CORS for cross-origin requests

// Setting up CORS headers for response
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

mongoose
  .connect(database_url)
  .then(async () => {
    console.log("DB Connected");

    // Start the server
    const server = app.listen(8010, () =>
      console.log("Server is running at http://127.0.0.1:8010")
    );
  })
  .catch((err) => console.error('DB Connection Error:', err));
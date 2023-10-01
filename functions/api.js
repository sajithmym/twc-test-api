// Delete the words "MongoDB URl here" Without Quotation and type your Mongodb Url 
const database_url = "mongodb+srv://sajith:asdQWE123@cluster0.exwgg9r.mongodb.net/contact?retryWrites=true&w=majority";
//****************************************************************** */

// Importing required modules and packages
const express = require("express"); // Importing Express web framework
const bodyParser = require("body-parser"); // Middleware to parse request bodies
const mongoose = require("mongoose"); // MongoDB Object Modeling tool
const cors = require('cors'); // Middleware for enabling CORS (Cross-Origin Resource Sharing)

const serverless = require('serverless-http')
const router = express.Router()

// import routes
const User_route = require('../routes/Route_User')
const Contact_route = require('../routes/Route_contact')

// import the user database model
const Main_user = require('../models/User_Model');

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

app.use(router)

router.use('', User_route)
router.use('', Contact_route)

mongoose
  .connect(database_url)
  .then(async () => {
    console.log("DB Connected");

    let user = await Main_user.findOne({ email: 'test@gmail.com' });

    if (!user) {
      // Create a new user
      let The_admin = new Main_user({
        email: 'test@gmail.com',
        password: '1020',
        name: 'sajith'
      });

      // Save the admin in the database
      await The_admin.save();
    }

    // Start the server
    // const server = app.listen(8010, () =>
    //   console.log("Server is running at http://127.0.0.1:8010")
    // );
  })
  .catch((err) => console.error('DB Connection Error:', err));

  module.exports.hadler = serverless('/.netlify/functions/api',app);
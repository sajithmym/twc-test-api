
const express = require('express'); // Import the 'express' 

const router = express.Router(); // Create a new router using the 'express' library

const User_Functions = require("../controller/User") // Import the controller functions


// Route for user Register
router.post("/reg", User_Functions.signup)

// Route for user Login
router.post("/Log", User_Functions.login)


module.exports = router; // Export the router 
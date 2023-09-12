// Import the 'mongoose' library.
const mongoose = require("mongoose");

// Create a new Mongoose schema using the 'Schema' class from 'mongoose'
const Schema = mongoose.Schema;

// Define the Mongoose schema for the 'User' collection
const userSchema = new Schema({
  // Define the 'email' field in the schema
  email: {
    type: String,     // The 'email' field should be of type 'String'
    required: true,   // It is required and must be provided when creating a new user document
  },

  // Define the 'password' field in the schema
  password: {
    type: String,     // The 'password' field should be of type 'String'
    required: true,   // It is required and must be provided when creating a new user document
  },

  // Define the 'name' field in the schema
  name: {
    type: String,     // The 'name' field should be of type 'String'
    required: true,   // It is required and must be provided when creating a new user document
  },

});

// Export the Mongoose model 'User' with the defined schema
module.exports = mongoose.model('User', userSchema);

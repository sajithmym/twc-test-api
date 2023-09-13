const mongoose = require("mongoose");

// Create a new Mongoose schema 
const Schema = mongoose.Schema;

// Define the Mongoose schema for the 'Post' collection
const ContactSchema = new Schema(
  {
    // Define the 'name' field 
    name: {
      type: String,     // The 'name' field should be of type 'String'
      required: true,   // It is required and must be provided when creating a new document
    },

    // Define the 'content' field in the schema
    email: {
      type: String,     // The 'content' field should be of type 'String'
      required: true,   // It is  required 
    },


    // Define the 'Mobile number' field in the schema
    mobile: {
      type: String,
      require: true   // The 'Mobile number' field is of type 'String' and is  required when creating a new document
    },

    gender: {
      type: String,
      require: true   // The 'Mobile number' field is of type 'String' and is  required when creating a new document
    },

    // Define the 'creator' field in the schema
    creator: {
      type: Schema.Types.ObjectId,  // The 'creator' field is of type 'ObjectId' that references 'User' documents
      ref: "User",                    // The 'ref' option specifies that the ObjectId references the 'User' model
      required: true,                 // It is required and must be provided when creating a new document
    },
  },
  { timestamps: true }   // The 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to the document
);

// Export the Mongoose model 'Post' with the defined schema
module.exports = mongoose.model("contact", ContactSchema);

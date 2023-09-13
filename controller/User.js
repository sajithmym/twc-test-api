const The_user = require("../models/User_Model"); // import user database

// Define the signup function to handle user signup and create a new user
exports.signup = async (req, res, next) => {
    // Extract email, name, and password from the request body
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      // Check if a user with the provided email already exists in the database
      const find = await The_user.findOne({ email: email });
      if (find) {
        res.send("This Email Address is Already Exist.");
        const error = new Error("A user with this email could not be found.");
        throw error;
      }
  
      // Create a new user instance with the provided email, hashed password, and name
      const user = new The_user({
        email: email,
        password: password,
      });
  
      // Save the new user in the database
      const result = await user.save();
  
      // Send a success response indicating that the user was created successfully
      res.send("User Created Successfully");
    } catch (err) {
      console.log(err); // Log any caught errors to the console
    }
  };


  // Define the login function to handle user authentication
exports.login = async (req, res, next) => {
    // Extract email and password from the request body
    const email = req.body.email;
    const password = req.body.password;
  
    try {
        // Find the user with the provided email
        const user = await The_user.findOne({ email: email });
  
        // If no user found, send an error response
        if (!user) {
          res.json({
            msg : "A user with this email could not be found.",
          });
          const error = new Error("A user with this email could not be found.");
          throw error;
        }
  
        // If the passwords don't match, send an error response
        if (!(user.password === password)) {
          res.json({
            msg : "Wrong password!",
          });
          const error = new Error("Wrong password!");
          throw error;
        }
  
        // If the login is successful, send a response with the user type (user), user ID, name, and email
        res.json({
          msg : "Success",
          info : ["user", user._id, user.email]
        });
      
    } catch (err) {
      console.log(err); // Log any caught errors to the console
    }
  };
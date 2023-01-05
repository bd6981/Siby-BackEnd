
	const mongoose = require("./connections.js");
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    
    email: String,
    password: String,
   
  });

  const User = mongoose.model("User", userSchema);
  module.exports = User;

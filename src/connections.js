require("dotenv").config();
const mongoose = require("mongoose");


const mongoURI = process.env.DB_URL;
const db = mongoose.connection;


mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((instance) =>
    console.log(`connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log("Connection failed!", error));


db.on("error", (err) => console.log(err.message + " is Mongosh not running?"));
db.on("connected", () => console.log("mongo connected at: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));


db.on("open", () => {
  console.log("✅ mongo connection made!");
});

module.exports = mongoose;

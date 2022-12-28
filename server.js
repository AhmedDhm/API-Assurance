const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 9810;


const config = require("./config/DB");
const bodyParser = require("body-parser");
var path = require("path");
const logger = require("morgan");

app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static("./uploads"));

app.use(logger("dev"));


//MongoDB Connnection
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (x) => {
      console.log("Database is Connected ! ");
    },
    (err) => {
      console.log("Can not connect to the database ", err);
    }
  );
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Assurance = require("./routes/Assurance");
app.use("/assurance", Assurance);


var server = app.listen(port, () => {
  console.log(`Server up and running on port ${port} !`);

});

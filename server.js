const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 3000;


const config = require("./config/DB");
const bodyParser = require("body-parser");
var path = require("path");

app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static("./uploads"));



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


if (process.env.NODE_ENV === "production") {
  console.log("app in production mode");
  app.use(express.static("client/build"));

  app.get("/*", function (req, res) {
    res.sendFile(
      path.join(__dirname, "client", "build", "index.html"),
      function (err) {
        if (err) res.status(500).send(err);
      }
    );
  });
}

var server = app.listen(port, () => {
  console.log(`Server up and running on port ${port} !`);
  
});

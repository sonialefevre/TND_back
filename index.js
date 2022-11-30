require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const router = require("./app/router");

const app = express();
const port = process.env.PORT;

//Authorizing all origins to access API for testing purposes - TO BE CHANGES
app.use(cors());
// Extracting all POST requests
app.use(express.urlencoded({ extended: true }));
// Allowing express to read json (for requests needing req.body)
app.use(express.json());

//Extracting data from multipart POST requests
const mutipartParser = multer();
//Not awaiting files but classic inputs
app.use(mutipartParser.none());

app.use(router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

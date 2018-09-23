// Dependencies
// ===================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();
// const axios = require("axios");
// const dialogflow = require('dialogflow');

// Initialize Express
// =====================================
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =====================================
// let apiRoutes = require("./routes");
// app.use("/api", apiRoutes);
// app.get("/api", function (req, res) {
//   axios
    // .post("https://dialogflow.googleapis.com/v2beta1/{session=" + "311ai" + "/*/" + "" 
    // projects/*/agent/sessions/*}:detectIntent")
    // .get(dialogflow, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// })
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Starting server
// =====================================
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

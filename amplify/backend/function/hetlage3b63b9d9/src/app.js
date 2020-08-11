var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var axios = require("axios");

// req.apiGatewayEvent req.apiGatewayContext
// req.body

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**********************
 * NEWS API get method *
 **********************/

app.get("/news", function (req, res) {
  axios
    .get(`https://newsapi.org/v2/top-headlines?sources=techcrunch`, {
      headers: { authorization: process.env.NEWS_API_KEY },
    })
    .then((response) =>
      res.json({
        posts: response.data.articles,
        success: "successfully fetched data",
        url: req.url,
      })
    )
    .catch((err) => res.json({ error: `error fetching from api - ${err}` }));
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

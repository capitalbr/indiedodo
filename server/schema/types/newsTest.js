// NEWS API REQUEST TO EXTERNAL API
const axios = require("axios");
const secret = require("../../../config/keys");

const apiNews = {
  method: "GET",
  url: `http://newsapi.org/v2/everything?q=animal%20conservation`,
  headers: {
        "x-api-key": secret.newsAPI
      }
};

axios(apiNews).then(res => console.log(res.data.articles));
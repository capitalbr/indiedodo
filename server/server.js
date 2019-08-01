const models = require("./models");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys.js").MONGO_URI;
const schema = require("./schema/schema");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const app = express();
const s3 = new aws.S3({ /* ... */ });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'indiedodo-dev',
    acl: 'public-read',
    // metadata: function (req, file, cb) {
    //   cb(null, { fieldName: file.fieldname });
    // },
    key: function (req, file, cb) {
      cb(null, file.originalname + "-" + Date.now().toString())
    }
  })
})

app.post('/upload', upload.single("picture"), function (req, res, next) {
  // res.send('Successfully uploaded ' + req.file.length + ' file!');
  res.json(req.file);
});

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    };
  })
);

// FOR TESTING ONLY DELETE WHEN DONE
// app.get("/", (req, res) => {
//   res.send("<h1>whats up</h1>")
// })
// END TESTING

if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.json());

module.exports = app;

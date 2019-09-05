const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
const User = require('../server/models/User');
const Comment = require('../server/models/Comment');

const seedComments = () => {
  Comment.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        User.findOne({ name: "Albus Dumbledore" })
          .then(user => {
            newComment = new Comment({
              body: "What a great campaign I have created!",
              user: user._id,
              campaign: campaign._id
            })
            newComment.save().then(comment => {
              console.log(`Success: ${comment.body} was created`);
            }, err => { console.log(`${comment.body} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        User.findOne({ name: "Stephen Curry" })
          .then(user => {
            newComment = new Comment({
              body: "Keep it raining Dumbledore!",
              user: user._id,
              campaign: campaign._id
            })
            newComment.save().then(comment => {
              console.log(`Success: ${comment.body} was created`);
            }, err => { console.log(`${comment.body} was unable to save due to: ${err}`) })
          })
      })

    
  })
}

seedComments().then((res) => { mongoose.connection.close() });

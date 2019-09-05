const mongoose = require('mongoose');
const db = require("../config/keys.js").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
const User = require('../server/models/User');
const Contribution = require('../server/models/Contribution');

const seedContributions = () => {
  Contribution.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        User.findOne({ name: "Albus Dumbledore"})
          .then(user => {
            newContribution = new Contribution({
              amount: 1111,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
            console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        User.findOne({ name: "Albus Dumbledore" })
          .then(user => {
            newContribution = new Contribution({
              amount: 1111,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
              console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        User.findOne({ name: "Stephen Curry"})
          .then(user => {
            newContribution = new Contribution({
              amount: 3333,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
            console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Zebra traingle offense" })
      .then(campaign => {
        User.findOne({ name: "Stephen Curry"})
          .then(user => {
            newContribution = new Contribution({
              amount: 4444,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
            console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Ruaha Carnivore Project" })
      .then(campaign => {
        User.findOne({ name: "Stephen Curry"})
          .then(user => {
            newContribution = new Contribution({
              amount: 333333,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
            console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

    Campaign.findOne({ title: "Ruaha Carnivore Project" })
      .then(campaign => {
        User.findOne({ name: "Albus Dumbledore"})
          .then(user => {
            newContribution = new Contribution({
              amount: 400000,
              user: user._id,
              campaign: campaign._id
            })
            newContribution.save().then(contribution => {
            console.log(`Success: ${contribution.amount} was paid`);
            }, err => { console.log(`${contribution.amount} was unable to save due to: ${err}`) })
          })
      })

  })
}

seedContributions().then((res) => { mongoose.connection.close() });

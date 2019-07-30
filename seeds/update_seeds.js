const mongoose = require('mongoose');
const db = require("../config/keys.js").MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
const Update = require('../server/models/Update');

const seedUpdates = () => {
  Update.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newUpdate = new Update({
          campaign: campaign._id,
          body: "Lion manes mane. Kind brushes and combs for cuddly lions",
        })
        newUpdate.save().then(update => {
          console.log(`Success: ${update.body} was created`);
        }, err => { console.log(`${update.body} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newUpdate = new Update({
          campaign: campaign._id,
          body: "Brushed a lot of lions today oooweee!",
        })
        newUpdate.save().then(update => {
          console.log(`Success: ${update.body} was created`);
        }, err => { console.log(`${update.body} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newUpdate = new Update({
          campaign: campaign._id,
          body: "at process._tickCallback (internal/process/next_tick.js:68:7)(node: 38237) UnhandledPromiseRejectionWarning: Unhandled promise rejection.This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)(node: 38237)[DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated.In the future, promise rejections that are not handled will terminate the Node.js process with a non- zero exit code."
        })
        newUpdate.save().then(update => {
          console.log(`Success: ${update.body} was created`);
        }, err => { console.log(`${update.body} was unable to save due to: ${err}`) })
      })
  })
}

seedUpdates().then((res) => { mongoose.connection.close() });
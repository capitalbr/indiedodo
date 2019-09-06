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
        User.findOne({ name: "Stephen Curry" })
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
        User.findOne({ name: "Stephen Curry" })
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
        User.findOne({ name: "Stephen Curry" })
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
        User.findOne({ name: "Albus Dumbledore" })
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

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

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

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Perk = require('../server/models/Perk');

const seedPerks = () => {
  Perk.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 1000,
          title: "Brush lion hair",
          description: "Lion manes mane. Kind brushes and combs for cuddly lions",
          inventory_info: "E pluribus. Out of many, one from latin.",
          shipping_info: "E pluribus. Out of many, one from latin.",
          est_shipping: "E pluribus. Out of many, one from latin.",
          image_url: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 200,
          title: "Brush lion hair",
          description: "Lion manes mane. Kind brushes and combs for cuddly lions",
          inventory_info: "E pluribus. Out of many, one from latin.",
          shipping_info: "E pluribus. Out of many, one from latin.",
          est_shipping: "E pluribus. Out of many, one from latin.",
          image_url: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Lion brush initiative" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 555,
          title: "Brush lion hair",
          description: "Lion manes mane. Kind brushes and combs for cuddly lions",
          inventory_info: "E pluribus. Out of many, one from latin.",
          shipping_info: "E pluribus. Out of many, one from latin.",
          est_shipping: "E pluribus. Out of many, one from latin.",
          image_url: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Ruaha Carnivore Project" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 99,
          title: "Lionize Your Vocals",
          description: "Legendary lion vocal coach Leon's instructional CD's!",
          inventory_info: "999 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "December 2020",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/Ruaha_Vocal_Lesson_CDs.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Ruaha Carnivore Project" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 999,
          title: "Don't 'Cheet' Your Rest",
          description: "100% Stone Hammock. Feel like a reptile on a warm rock",
          inventory_info: "99 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "December 2019",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/Ruaha_Rock_Hammock.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Ruaha Carnivore Project" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 75,
          title: "Traditional Garb",
          description: "Embrace the rich earthy tones",
          inventory_info: "9 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "October 2019",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/Ruaha_Email_Fashion_Advice.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })

    Campaign.findOne({ title: "Amphibian Survival Alliance" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 40,
          title: "Half Man Half Fish Snorkel",
          description: "Thin, moist mask to help you breath like an amphibian.",
          inventory_info: "50 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "November 2020.",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/amphibian3.jpeg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })
    Campaign.findOne({ title: "Amphibian Survival Alliance" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 20,
          title: "Chameleon T",
          description: "Featuring a mottled green background",
          inventory_info: "200 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "July 2020.",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/amphibian-shirt.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })
    Campaign.findOne({ title: "Amphibian Survival Alliance" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 20,
          title: "Portrait",
          description: "Beautifully rendered image",
          inventory_info: "250 remaining",
          shipping_info: "Ships worldwide.",
          est_shipping: "June 2020.",
          image_url: "https://indiedodo-dev.s3-us-west-1.amazonaws.com/amphibian1.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })
  })
}

seedPerks().then((res) => { mongoose.connection.close() });

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

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
  })
}

seedUpdates().then((res) => { mongoose.connection.close() });

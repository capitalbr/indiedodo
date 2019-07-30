const mongoose = require('mongoose');
const db = require("../config/keys.js").MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
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

    Campaign.findOne({ title: "They hunt crocodiles" })
      .then(campaign => {
        newPerk = new Perk({
          campaign: campaign._id,
          cost: 123,
          title: "They hunt crocodiles",
          description: "They hunt crocodiles, big ones.",
          inventory_info: "E pluribus. Out of many, one from latin.",
          shipping_info: "E pluribus. Out of many, one from latin.",
          est_shipping: "E pluribus. Out of many, one from latin.",
          image_url: "https://media.londolozi.com/wp-content/uploads/2016/07/11013916/Panther1.jpg",
        })
        newPerk.save().then(perk => {
          console.log(`Success: ${perk.title} was created`);
        }, err => { console.log(`${perk.title} was unable to save due to: ${err}`) })
      })
    
  })
}

seedPerks().then((res) => { mongoose.connection.close() });
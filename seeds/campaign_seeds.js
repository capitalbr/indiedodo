const mongoose = require('mongoose');
const db = require("../config/keys.js").MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const Campaign = require('../server/models/Campaign');
const User = require('../server/models/User');

const seedCampaigns = () => {
  Campaign.deleteMany({}, (err) => { console.log(err) });
  return new Promise((res, rej) => {
    User.findOne({ name: "Albus Dumbledore" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "Lion brush initiative",
          tagline: "Lion mane",
          overview: "Kind brushes and combs for cuddly lions",
          story: "E pluribus. Out of many, one from latin.",
          faq: "E pluribus. Out of many, one from latin.",
          image_url: "https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_lions_0.jpg",
          youtube_url: "https://www.youtube.com/embed/IChRNbuHHWE",
          category: "Mammal",
          goal: 100000,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.name} was created`);
        }, err => { console.log(`${campaign.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ name: "Giannis Antetokounmpo" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "They hunt crocodiles",
          tagline: "Black Panther",
          overview: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          story: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          faq: "The animal known as a panther actually refers to 3 different types of big cats, leopards (Panthera pardus) or jaguars (Panthera onca) that have a black or white color mutation and a subspecies of the cougar (Puma concolor). ",
          image_url: "https://media.londolozi.com/wp-content/uploads/2016/07/11013916/Panther1.jpg",
          category: "Mammal",
          goal: 5555,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.name} was created`);
        }, err => { console.log(`${campaign.name} was unable to save due to: ${err}`) })
      })

    User.findOne({ name: "Stephen Curry" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign = new Campaign({
          title: "Zebra traingle offense",
          tagline: "3 heads are better than 2",
          overview: "Zebra are part of the equidae family along with horse and donkeys. Every zebra has a unique pattern of black and white stripes.",
          story: "There are a number of different theories which attempt to explain zebra's unique stripes with most relating to camouflage. Wild zebras live in Africa.",
          faq: "There are a number of different theories which attempt to explain zebra's unique stripes with most relating to camouflage. Wild zebras live in Africa.",
          image_url: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1550684943/zebras-STRIPEPOWER0219.jpg?itok=zfKIXCep",
          category: "Mammal",
          goal: 12345,
          end_date: endDate,
          user: user._id,
        })
        newCampaign.save().then(campaign => {
          console.log(`Success: ${campaign.title} was created`);
        }, err => { console.log(`${campaign.title} was unable to save due to: ${err}`) })
      })
  })
}

seedCampaigns().then((res) => { mongoose.connection.close() });
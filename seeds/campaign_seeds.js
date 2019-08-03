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
        newCampaign1 = new Campaign({
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

      User.findOne({ name: "Albus Dumbledore" })
      .then(user => {
        let endDate = new Date();
        endDate.setDate(38);
        newCampaign1 = new Campaign({
          title: "Golden Dorado Conservation Research",
          tagline: "Fund research on Golden Dorado in Argentina to develop more effective management strategies",
          overview: "Fund research on Golden Dorado in Argentina to develop more effective management strategies",
          story: "Dorado (Salminus brasiliensis) is an iconic and charismatic fish species in neotropical rivers of Brazil, Paraguay, Uruguay, Bolivia, and northern Argentina. Both sport and commercial fishers value Dorado for their sustenance, vigor, beauty, and challenge. ­­Dorado provides economic support for communities in northern Argentina and throughout South America. Currently the species is facing severe pressure and declining populations due to overharvest harvest, habitat degradation, and poorly understood ecology, including movement patterns. ",
          faq: "E pluribus. Out of many, one from latin.",
          image_url: "https://live.staticflickr.com/4100/4863789079_e3de32e7d3_b.jpg",
          youtube_url: "https://www.youtube.com/watch?v=4Q3av_zpuYw",
          category: "Fish",
          goal: 15000,
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
          title: "Gorilla Conservation Coffee",
          tagline: "Saving gorillas - one sip at a time",
          overview: "You can make a difference to community livelihoods and help save critically endangered mountain gorillas by buying coffee and visiting the gorillas and the farmers at Bwindi.",
          story: "Gorilla Conservation Coffee was founded on the belief that conservation will succeed when communities are involved. We strive to provide alternative income streams and markets for the local farmers through training them to improve coffee production while teaching communities the importance and value of the mountain gorillas in their lives. We are developing a global brand that will provide sustainable financing for local livelihoods and grassroots gorilla conservation efforts in Uganda.",
          faq: "As a thank you for supporting our project we will send you a Kanyonyi Gorilla postcard! We will make sure to keep you up-to-date as our company grows!",
          image_url: "https://radioimg.s3.amazonaws.com/kjkkfm/styles/delta__775x515/s3/dreamstime_xs_4756120.jpg?itok=776J8vTB",
          youtube_url: "https://www.youtube.com/watch?time_continue=1&v=QBSNd1J1V7g",
          category: "Mammal",
          goal: 50000,
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
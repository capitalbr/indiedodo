const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const db = require("../config/keys.js").MONGO_URI;
const AuthService = require("../server/services/auth");


mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));

const User = require('../server/models/User');

const seedUsers = () => {
  User.deleteMany({}, (err) => { console.log(err) })
  return new Promise((res, rej) => {
    const userArray = [];

    // userArray.push(
    AuthService.register({
        name: "Albus Dumbledore",
        email: "albus@hogwarts.edu",
        bio_header: "One can never have enough socks.",
        bio: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        password: "Qwerty1234!"
    })
    AuthService.register({
        name: "Stephen Curry",
        email: "stephcurry@warriors.net",
        bio_header: "3pt specialist",
        bio: "Slash brothers founding partner",
        password: "12345678"
    })
    AuthService.register({
        name: "Africa Wildlife Foundation",
        email: "africanwildlife@awf.org",
        bio_header: "Protecting Africa's Most Threatened Species",
        bio: "We’re working to ensure wildlife and wild lands thrive in modern Africa.",
        password: "12345678"
      })
      AuthService.register({
        name: "Amphibian Surival Alliance",
        email: "info@amphibians.org",
        bio_header: "Rising To The Challenge Of Conserving Amphibians",
        bio: "The Amphibian Survival Alliance (ASA) officially launched in 2011, and has since built a committed global alliance of Partners, dedicated to developing a better world for amphibians through coordinated conservation action. ASA promotes and coordinates the implementation of conservation actions for amphibians through an active, growing, engaged, committed, and collaborative partnership around the world. The great need for this endeavour is reflected in the rate of loss of amphibian populations globally, and we face a challenging future as we strive to reverse these trajectories."+
             "We envisage a future where amphibian conservation is fully collaborative and integrated into global conservation priorities — a future where amphibians are valued for their many contributions to this world, as well as their astonishing beauty and variety.We seek to preserve this variety, as part of healthy ecosystems, for generations to come.",
        password: "12345678"
    })

    // for (let i = 0, fin = userArray.length; i < fin; i++) {
    //   const user = userArray[i];
    //   console.log(user);
    //   // user.password = "12345678";
    //   bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(user.password, salt, (err, hash) => {
    //       if (err) throw err;
    //       user.password_digest = hash;
    //       user.save().then(user => {
    //         console.log(`Success: ${user.name} was created`);
    //       }, err => { console.log(`${user.name} was unable to save due to: ${err}`) })
    //     })
    //   })
    // }
  })
}

seedUsers().then((res) => { mongoose.connection.close() });
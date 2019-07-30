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
        email: "DemoUser@gmail.com",
        bio_header: "One can never have enough socks.",
        bio: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        password: "12345678"
    })


    // userArray.push(
    AuthService.register({
        name: "Stephen Curry",
        email: "stephcurry@warriors.net",
        bio_header: "3pt specialist",
        bio: "Slash brothers founding partner",
        password: "12345678"
    })
    // );

    // userArray.push(
    AuthService.register({
        name: "Giannis Antetokounmpo",
        email: "greek@freak.com",
        bio_header: "The Alphabet",
        bio: "The Greek Freak",
        password: "12345678"
    })

    // userArray.push(
    AuthService.register({
        name: "Bandersnatch",
        email: "bandcamp@nigthmare.com",
        bio_header: "Black Mirror",
        bio: "Choose your own adventure",
        password: "12345678"
    })

    // debugger
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
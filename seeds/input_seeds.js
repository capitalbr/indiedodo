const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
const seedUsers = require("./user_seeds");
const seedCampaigns = require("./campaign_seeds");
const seedPerks = require("./perk_seeds");
const seedComments = require("./comment_seeds");
const seedContributions = require("./contribution_seeds");
const seedUpdates = require("./update_seeds");

const Campaign = require('../server/models/Campaign');
const User = require('../server/models/User');
const Update = require('../server/models/Update');
const Perk = require('../server/models/Perk');
const Contribution = require('../server/models/Contribution');
const Comment = require('../server/models/Comment');

const bcrypt = require('bcryptjs');
const AuthService = require("../server/services/auth");


mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(`${err}: Cannot connect to MongoDB`));


seedUsers()
// .then((res) => { mongoose.connection.close() });
seedCampaigns()
// .then((res) => { mongoose.connection.close() });
seedPerks()
// .then((res) => { mongoose.connection.close() });
seedComments()
// .then((res) => { mongoose.connection.close() });
seedContributions()
// .then((res) => { mongoose.connection.close() });
seedUpdates()
  .then((res) => { mongoose.connection.close() });


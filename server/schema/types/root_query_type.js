require("../../models");
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } = graphql;

const UserType = require("./user_type");
const CampaignType = require("./campaign_type");
const CommentType = require("./comment_type");
const ContributionType = require("./contribution_type");
const SpeciesType = require("./species_type");
const UpdateType = require("./update_type");
const PerkType = require("./perk_type");

// const CategoryType = require("./category_type");
// const ProductType = require("./product_type");

const User = mongoose.model("users");
const Campaign = mongoose.model("campaigns");
const Comment = mongoose.model("comments");
const Contribution = mongoose.model("contributions");
// const Species = mongoose.model("species");
const Update = mongoose.model("updates");
const Perk = mongoose.model("perks");



// SPECIES API REQUEST TO EXTERNAL API
const axios = require("axios");
const secret = require("../../../config/keys");

const apiSpecies = {
  // method: "GET",
  // url: `???`,
  // headers: {
  //   "x-api-key": secret.AWSKey
  // }
};

const apiAllSpecies = {
  // method: "GET",
  // url: `???`,
  // headers: {
  //   "x-api-key": secret.AWSKey
  // }
};

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, args) {
        return User.findOne({ _id: args._id });
      }
    },
    currentUser: {
      type: UserType,
      args: { token: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, args) {
        return User.findOne({ token: args.token });
        // Campaign.findOne({ name: req.body.name })
      }
    },
    campaigns: {
      type: new GraphQLList(CampaignType),
      resolve() {
        return Campaign.find({});
      }
    },
    campaign: {
      type: CampaignType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Campaign.findById(args._id);
      }
    },
    userCampaigns: {
      type: new GraphQLList(CampaignType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Campaign.find(
          { user: args.userId }
        )
      }
    },
    userComments: {
      type: new GraphQLList(CommentType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Comment.find(
          { user: args.userId }
        )
      }
    },
    userContributions: {
      type: new GraphQLList(ContributionType),
      args: { userId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Contribution.find(
          { user: args.userId }
        )
      }
    },
    campaignUpdates: {
      type: new GraphQLList(UpdateType),
      args: { campaignId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Update.find(
          { campaign: args.campaignId }
        )
      }
    },
    campaignComments: {
      type: new GraphQLList(CommentType),
      args: { campaignId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Comment.find(
          { campaign: args.campaignId }
        )
      }
    },
    campaignPerks: {
      type: new GraphQLList(PerkType),
      args: { campaignId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Perk.find(
          { campaign: args.campaignId }
        )
      }
    },
    campaignContributions: {
      type: new GraphQLList(ContributionType),
      args: { campaignId: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Contribution.find(
          { campaign: args.campaignId }
        )
      }
    },
    contributions: {
      type: new GraphQLList(ContributionType),
      resolve() {
        return Contribution.find({});
      }
    },

    // species: {
    //   type: SpeciesType,
    //   args: { name: { type: new GraphQLNonNull(GraphQLString) } },
    //   resolve(_, {name} ) {
    //     return axios(apiSpecies).then(res => {
    //     species = {};
    //     let speciesInfo = res.data.values.filter(species => species.name === name)

    //     // I DONT THINK WE NEED A TABLE FOR THIS
    //     // JUST ALWAYS HIT THE EXTERNAL API AND CREATE AN OBJECT
    //     // THAT WE POPULATE WITH PARTS OF THE RESPONSE

    //     // species.name = speciesInfo.???;
    //     // species.description = speciesInfo.???;
    //     // species.type = speciesInfo.???;
    //     // species.status = speciesInfo.???;

    //     return species;
    //     })  
    //   }
    // },
    // allSpecies: {
    //   type: new GraphQLList(SpeciesType),
    //   resolve(_) {
    //     return axios(apiAllSpecies).then(res => {
    //       // MIGHT BE USEFUL TO GET ALL SPECIES NAMES

    //       species = [];
    //       resKeys = res.data.keys;
    //       resKeys.forEach(key => {
    //         // species.push(res.data.key.name)
    //       })
    //       return species;
    //     })
    //   }
    // },
    
  })
});

module.exports = RootQueryType;

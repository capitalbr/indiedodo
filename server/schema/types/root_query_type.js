require("../../models");
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } = graphql;

const UserType = require("./user_type");
const CampaignType = require("./campaign_type");
const SpeciesType = require("./species_type");

// const CategoryType = require("./category_type");
// const ProductType = require("./product_type");

const User = mongoose.model("users");
// const Category = mongoose.model("categories");
// const Product = mongoose.model("products");



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
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return User.findById(args._id);
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
    species: {
      type: SpeciesType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, {name} ) {
        return axios(apiSpecies).then(res => {
        species = {};
        let speciesInfo = res.data.values.filter(species => species.name === name)

        // I DONT THINK WE NEED A TABLE FOR THIS
        // JUST ALWAYS HIT THE EXTERNAL API AND CREATE AN OBJECT
        // THAT WE POPULATE WITH PARTS OF THE RESPONSE

        // species.name = speciesInfo.???;
        // species.description = speciesInfo.???;
        // species.type = speciesInfo.???;
        // species.status = speciesInfo.???;

        return species;
        })  
      }
    },
    allSpecies: {
      type: new GraphQLList(SpeciesType),
      resolve(_) {
        return axios(apiAllSpecies).then(res => {
          // MIGHT BE USEFUL TO GET ALL SPECIES NAMES

          species = [];
          resKeys = res.data.keys;
          resKeys.forEach(key => {
            // species.push(res.data.key.name)
          })
          return species;
        })
      }
    }
    // categories: {
    //   type: new GraphQLList(CategoryType),
    //   resolve() {
    //     return Category.find({});
    //   }
    // },
    // category: {
    //   type: CategoryType,
    //   args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(_, args) {
    //     return Category.findById(args._id);
    //   }
    // },
    // products: {
    //   type: new GraphQLList(ProductType),
    //   resolve() {
    //     return (
    //       Product.find({})
    //         // Bonus Phase Day 1 - Adding the Lambda
    //         .then(products => {
    //           const productsWithCost = products.map(product => {
    //             return axios(authOptions).then(res => {
    //               product.cost = res.data.cost;
    //               return product;
    //             });
    //           });

    //           return productsWithCost;
    //         })
    //     );
    //   }
    // },
    // product: {
    //   type: ProductType,
    //   args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(_, args) {
    //     return (
    //       Product.findById(args._id)
    //         // Bonus Phase Day 1 - Adding the Lambda
    //         .then(product => {
    //           return axios(authOptions).then(res => {
    //             product.cost = res.data.cost;
    //             return product;
    //           });
    //         })
    //     );
    //   }
    // }
  })
});

module.exports = RootQueryType;

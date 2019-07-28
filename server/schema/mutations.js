const mongoose = require("mongoose");
const graphql = require("graphql");
const { 
  GraphQLObjectType,
  GraphQLString, 
  GraphQLInt, 
  GraphQLID,
  GraphQLFloat
 } = graphql;

import {
  GraphQLDate
} from 'graphql-iso-date';

const UserType = require("./types/user_type");
const CampaignType = require("./types/campaign_type");
// const CategoryType = require("./types/category_type");
// const ProductType = require("./types/product_type");
const AuthService = require("../services/auth");

// const Category = mongoose.model("categories");
// const Product = mongoose.model("products");
const Campaign = mongoose.model("campaigns");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newCampaign: {
      type: CampaignType,
      args: {
        title: { type: GraphQLString },
        tagline: { type: GraphQLString },
        overview: { type: GraphQLString },
        story: { type: GraphQLString },
        faq: { type: GraphQLString },
        image_url: { type: GraphQLString },
        category: { type: GraphQLString },
        raised: { type: GraphQLFloat },
        goal: { type: GraphQLFloat },
        end_date: { type: GraphQLDate }
      },
      resolve(_, { title, tagline, overview, story, faq, image_url, category, raised, goal, end_date }) {
        return new Campaign({
          title, 
          tagline, 
          overview, 
          story, 
          faq, 
          image_url, 
          category, 
          raised, 
          goal, 
          end_date
        }).save();
      }
    },
    // newCategory: {
    //   type: CategoryType,
    //   args: {
    //     name: { type: GraphQLString }
    //   },
    //   resolve(_, { name }) {
    //     return new Category({ name }).save();
    //   }
    // },
    // deleteCategory: {
    //   type: CategoryType,
    //   args: { _id: { type: GraphQLID } },
    //   resolve(_, { _id }) {
    //     return Category.remove({ _id });
    //   }
    // },
    // newProduct: {
    //   type: ProductType,
    //   args: {
    //     name: { type: GraphQLString },
    //     description: { type: GraphQLString },
    //     weight: { type: GraphQLInt }
    //   },
    //   async resolve(_, { name, description, weight }, ctx) {
    //     const validUser = await AuthService.verifyUser({ token: ctx.token });
    //     if (validUser.loggedIn) {
    //       return new Product({ name, description, weight }).save();
    //     } else {
    //       throw new Error(
    //         "Sorry, you need to be logged in to create a product."
    //       );
    //     }
    //   }
    // },
    // deleteProduct: {
    //   type: ProductType,
    //   args: { _id: { type: GraphQLID } },
    //   resolve(_, { _id }) {
    //     return Product.remove({ _id });
    //   }
    // },
    // updateProductCategory: {
    //   type: ProductType,
    //   args: {
    //     productId: { type: GraphQLID },
    //     categoryId: { type: GraphQLID }
    //   },
    //   resolve(_, { productId, categoryId }) {
    //     return Product.updateProductCategory(productId, categoryId);
    //   }
    // },
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        bio_header: { type: GraphQLString },
        bio: { type: GraphQLString },
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      async resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    }
  }
});

module.exports = mutation;

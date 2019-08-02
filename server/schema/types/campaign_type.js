const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;

// import {
//   GraphQLDate
// } from 'graphql-iso-date';

const { GraphQLDate } = require("graphql-iso-date");

const CampaignType = new GraphQLObjectType({
  name: 'CampaignType',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    tagline: { type: GraphQLString },
    overview: { type: GraphQLString },
    story: { type: GraphQLString },
    faq: { type: GraphQLString },
    image_url: { type: GraphQLString },
    youtube_url: { type: GraphQLString },
    category: { type: GraphQLString },
    goal: { type: GraphQLFloat },
    end_date: { type: GraphQLDate },
    user: { type: GraphQLID },
  }
});

module.exports = CampaignType;

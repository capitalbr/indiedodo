const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList
} = graphql;


const ContributionType = new GraphQLObjectType({
  name: 'ContributionType',
  fields: {
    _id: { type: GraphQLID },
    campaign: { type: GraphQLID },
    user: { type: GraphQLID },
    amount: { type: GraphQLFloat }
  }
})


module.exports = ContributionType;


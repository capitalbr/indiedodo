const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;

const SpeciesType = new GraphQLObjectType({
  name: 'SpeciesType',
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    status: { type: GraphQLBoolean }
  }
});

module.exports = SpeciesType;
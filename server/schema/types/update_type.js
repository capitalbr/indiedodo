const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql;

const UpdateType = new GraphQLObjectType({
  name: 'UpdateType',
  fields: {
    _id: { type: GraphQLID },
    body: { type: GraphQLString },
    user: { type: GraphQLID },
    campaign: { type: GraphQLID }
  }
});

module.exports = UpdateType;

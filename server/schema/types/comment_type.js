const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = graphql;

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    _id: { type: GraphQLID },
    body: { type: GraphQLString },
    user: { type: GraphQLID },
    campaign: { type: GraphQLID }
  }
});

module.exports = CommentType;

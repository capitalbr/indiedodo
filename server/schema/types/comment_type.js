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
    user_id: { type: GraphQLID },
    campaign_id: { type: GraphQLID }
  }
});

module.exports = CommentType;

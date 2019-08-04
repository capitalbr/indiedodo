const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    urlToImage: { type: GraphQLString },
    publishedAt: { type: GraphQLString },
    content: { type: GraphQLString },
  }
});

module.exports = ArticleType;
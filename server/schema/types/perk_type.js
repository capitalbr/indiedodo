const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} = graphql;

const PerkType = new GraphQLObjectType({
  name: 'PerkType',
  fields: {
    _id: { type: GraphQLID },
    campaign: { type: GraphQLID },
    cost: { type: GraphQLFloat },
    description: { type: GraphQLString },
    image_url: { type: GraphQLString },
    est_shipping: { type: GraphQLString },
    inventory_info: { type: GraphQLString },
    shipping_info: { type: GraphQLString },
    option: { type: GraphQLString },
  }
});

module.exports = PerkType;
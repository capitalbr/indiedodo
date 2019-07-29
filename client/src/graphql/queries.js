import gql from "graphql-tag";

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_CAMPAIGNS: gql`
    query fetchCampaigns {
      campaigns {
        _id
        title
        tagline
        overview
        story
        faq
        image_url
        category
        goal
        end_date
      }
    }
  `,
  FETCH_USER_CAMPAIGNS: gql`
    query fetchUserCampaigns($user_id: ID!) {
      userCampaigns(user_id: $user_id) {
        _id
        title
        tagline
        overview
        story
        faq
        image_url
        category
        goal
        end_date
      }
    }
  `,
  FETCH_CAMPAIGN: gql`
    query fetchCampaign($campaignId: ID!) {
      campaign(_id: $campaignId) {
        _id
        title
        tagline
        overview
        story
        faq
        image_url
        category
        goal
        end_date
      }
    }
  `,
  FETCH_SPECIES: gql`
    query fetchSpecies($name: String!) {
      species(name: $name) {
        name
        description
        type
        status
      }
    }
  `,
  FETCH_ALL_SPECIES: gql`
    query fetchAllSpecies {
      allSpecies {
        name
        description
        type
        status
      }
    }
  `,
  FETCH_CAMPAIGN_UPDATES: gql`
    query fetchCampaignUpdates($campaignId: ID!) {
      campaignUpdates(campaignId: $campaignId) {
        _id
        body
        user_id
        campaign_id
      }
    }
  `,
  FETCH_CAMPAIGN_COMMENTS: gql`
    query fetchCampaignComments($campaignId: ID!) {
      campaignComments(campaignId: $campaignId) {
        _id
        body
        user_id
        campaign_id
      }
    }
  `,
  FETCH_USER_COMMENTS: gql`
    query fetchUserComments($userId: ID!) {
      userComments(userId: $userId) {
        _id
        body
        user_id
        campaign_id
      }
    }
  `,
  FETCH_CAMPAIGN_PERKS: gql`
    query fetchCampaignPerks($campaignId: ID!) {
      campaignPerks(campaignId: $campaignId) {
        _id
        campaign_id
        cost
        description
        image_url
        option
      }
    }
  `,
 
  // FETCH_PRODUCTS: gql`
  //   query fetchProducts {
  //     products {
  //       _id
  //       name
  //       description
  //       cost
  //     }
  //   }
  // `,
  // FETCH_PRODUCT: gql`
  //   query fetchProduct($productId: ID!) {
  //     product(_id: $productId) {
  //       _id
  //       name
  //       cost
  //       description
  //       weight
  //       category {
  //         name
  //       }
  //     }
  //   }
  // `,
  // FETCH_CART_ITEMS: gql`
  //   query FetchCartItems {
  //     cart @client
  //   }
  // `
};

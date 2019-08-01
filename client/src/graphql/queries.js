import gql from "graphql-tag";

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_USER: gql`
    query fetchUser($id: ID!) {
      user(_id: $id){
        _id
        name
        email
        token
        loggedIn
        bio_header
      }
    }
  `,
  CURRENT_USER: gql`
    query currentUser($token: String!) {
      currentUser(token: $token){
        _id
        name
        email
        token
        loggedIn
      }
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
        user
      }
    }
  `,
  FETCH_USER_CAMPAIGNS: gql`
    query fetchUserCampaigns($userId: ID!) {
      userCampaigns(userId: $userId) {
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
        user
      }
    }
  `,
  // FETCH_SPECIES: gql`
  //   query fetchSpecies($name: String!) {
  //     species(name: $name) {
  //       name
  //       description
  //       type
  //       status
  //     }
  //   }
  // `,
  // FETCH_ALL_SPECIES: gql`
  //   query fetchAllSpecies {
  //     allSpecies {
  //       name
  //       description
  //       type
  //       status
  //     }
  //   }
  // `,
  FETCH_CAMPAIGN_UPDATES: gql`
    query fetchCampaignUpdates($campaignId: ID!) {
      campaignUpdates(campaignId: $campaignId) {
        _id
        body
      }
    }
  `,
  FETCH_CAMPAIGN_COMMENTS: gql`
    query fetchCampaignComments($campaignId: ID!) {
      campaignComments(campaignId: $campaignId) {
        _id
        body
        user {
          name
        }
      }
    }
  `,
  FETCH_USER_COMMENTS: gql`
    query fetchUserComments($userId: ID!) {
      userComments(userId: $userId) {
        _id
        body
      }
    }
  `,
  FETCH_CAMPAIGN_PERKS: gql`
    query fetchCampaignPerks($campaignId: ID!) {
      campaignPerks(campaignId: $campaignId) {
        _id
        campaign
        cost
        description
        image_url
        option
      }
    }
  `,
  FETCH_CAMPAIGN_CONTRIBUTIONS: gql`
    query fetchCampaignContributions($campaignId: ID!) {
      campaignContributions(campaignId: $campaignId) {
        _id
        campaign
        user
        amount
      }
    }
  `,
  FETCH_USER_CONTRIBUTIONS: gql`
    query fetchUserContributions($userId: ID!) {
      userContributions(userId: $userId) {
        _id
        campaign
        user
        amount
      }
    }
  `,
  // TO SHOW THE COMBINED TOTAL OF HOW MUCH WE'VE RAISED TO BE DISPLAYED ON OUR LANDING
  FETCH_ALL_CONTRIBUTIONS: gql`
    query fetchAllContributions {
        contributions {
        _id
        campaign
        user
        amount
      }
    }
  `,
  // FETCH_CART_ITEMS: gql`
  //   query FetchCartItems {
  //     cart @client
  //   }
  // `
};

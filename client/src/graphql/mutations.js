import gql from "graphql-tag";

export default {
  LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        loggedIn
      }
    }
  `,
  REGISTER_USER: gql`
    mutation RegisterUser($email: String!, $name: String!, $password: String!, $bio_header: String!, $bio: String!) {
      register(email: $email, name: $name, password: $password, bio_header: $bio_header, bio: $bio) {
        token
        loggedIn
      }
    }
  `,
  // CREATE_PRODUCT: gql`
  //   mutation CreateProduct(
  //     $name: String!
  //     $description: String!
  //     $weight: Int!
  //   ) {
  //     newProduct(name: $name, description: $description, weight: $weight) {
  //       _id
  //       name
  //       description
  //       weight
  //     }
  //   }
  // `,
   CREATE_CAMPAIGN: gql`
    mutation CreateCampaign(
      $title: String!
      $tagline: String!
      $overview: String!
      $story: String!
      $faq: String!
      $image_url: String!
      $category: String!
      $goal: Float!
      $end_date: Date!
    ) {
      newCampaign(title: $title, tagline: $tagline, overview: $overview, story: $story, faq: $faq, image_url: $image_url, category: $category, goal: $goal, end_date: $end_date) {
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
  DELETE_CAMPAIGN: gql`
    mutation DeleteCampaign($id: ID!) {
      deleteCampaign(_id: $id) {
        _id
      }
    }
  `,
  UPDATE_CAMPAIGN: gql`
    mutation UpdateCampaign(
      $id: ID!
      $title: String
      $tagline: String
      $overview: String
      $story: String
      $faq: String
      $image_url: String
      $category: String
      $goal: Float
      $end_date: Date
    ) {
      updateCampaign(_id: $id, title: $title, tagline: $tagline, overview: $overview, story: $story, faq: $faq, image_url: $image_url, category: $category, goal: $goal, end_date: $end_date) {
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
  CREATE_UPDATE: gql`
    mutation CreateUpdate(
      $body: String!
      $user_id: ID!
      $campaign_id: ID!
    ) {
      newUpdate(body: $body, user_id: $user_id, campaign_id: $campaign_id) {
        _id
        body
        user_id
        campaign_id
      }
    }
  `,
  DELETE_UPDATE: gql`
    mutation DeleteUpdate($id: ID!) {
      deleteUpdate(_id: $id) {
        _id
      }
    }
  `,
  UPDATE_UPDATE: gql`
    mutation updateUpdate(
      $_id: ID!
      $body: String!
    ) {
      updateUpdate(_id: $_id, body: $body) {
        _id
        body
      }
    }
  `,
  CREATE_COMMENT: gql`
    mutation CreateComment(
      $body: String!
      $user_id: ID!
      $campaign_id: ID!
    ) {
      newComment(body: $body, user_id: $user_id, campaign_id: $campaign_id) {
        _id
        body
        user_id
        campaign_id
      }
    }
  `,
  DELETE_COMMENT: gql`
    mutation DeleteComment($id: ID!) {
      deleteComment(_id: $id) {
        _id
      }
    }
  `,
  UPDATE_COMMENT: gql`
    mutation updateComment(
      $_id: ID!
      $body: String!
    ) {
      updateComment(_id: $_id, body: $body) {
        _id
        body
      }
    }
  `,
  CREATE_PERK: gql`
    mutation CreatePerk(
      $campaign_id: ID!
      $cost: Float!
      $description: String!
      $image_url: String!
      $option: String!
    ) {
      newPerk(campaign_id: $campaign_id, cost: $cost, description: $description, image_url: $image_url, option: $option) {
        _id
        campaign_id
        cost
        description
        image_url
        option
      }
    }
  `,
  DELETE_PERK: gql`
    mutation DeletePerk($id: ID!) {
      deletePerk(_id: $id) {
        _id
      }
    }
  `,
  UPDATE_PERK: gql`
    mutation updatePerk(
      $_id: ID!
      $cost: Float
      $description: String
      $image_url: String
      $option: String
    ) {
      updatePerk(_id: $_id, cost: $cost, description: $description, image_url: $image_url, option: $option) {
        _id
        cost
        description
        image_url
        option
      }
    }
  `,
  VERIFY_USER: gql`
    mutation VerifyUser($token: String!) {
      verifyUser(token: $token) {
        loggedIn
      }
    }
  `
};

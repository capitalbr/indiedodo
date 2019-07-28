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
      $raised: Float!
      $goal: Float!
      $end_date: Date!
    ) {
      newCampaign(title: $title, tagline: $tagline, overview: $overview, story: $story, faq: $faq, image_url: $image_url, category: $category, raised: $raised, goal: $goal, end_date: $end_date) {
        _id
        title
        tagline
        overview
        story
        faq
        image_url
        category
        raised
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
      $raised: Float
      $goal: Float
      $end_date: Date
    ) {
      updateCampaign(_id: $id, title: $title, tagline: $tagline, overview: $overview, story: $story, faq: $faq, image_url: $image_url, category: $category, raised: $raised, goal: $goal, end_date: $end_date) {
        _id
        title
        tagline
        overview
        story
        faq
        image_url
        category
        raised
        goal
        end_date
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

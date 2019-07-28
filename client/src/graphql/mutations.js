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
  VERIFY_USER: gql`
    mutation VerifyUser($token: String!) {
      verifyUser(token: $token) {
        loggedIn
      }
    }
  `
};

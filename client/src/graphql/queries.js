import gql from "graphql-tag";

export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
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

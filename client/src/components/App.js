import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthRoute from "../util/route_util";

// import Nav from "./Nav";
import Login from "./session/login";
import Register from "./session/register";
// import ProductIndex from "./products/ProductIndex";
// import ProductDetail from "./products/ProductDetail";
// import CreateProduct from "./products/CreateProduct";
// import Cart from "./cart/Cart";
const App = () => {
//   return (
//     <h1>We love animals!</h1>
//   )
// }


  return (
    <div>
      {/* <h1>
        <Link to="/">Online Store</Link>
      </h1> */}
      {/* <Route path="/" component={Nav} /> */}
      <Switch>
        {/* <Route exact path="/" component={ProductIndex} /> */}
        {/* <AuthRoute
          exact
          path="/products/:productId"
          component={ProductDetail}
          routeType="protected"
        />
        <AuthRoute
          exact
          path="/create"
          component={CreateProduct}
          routeType="protected"
        /> */}
        {/* <AuthRoute exact path="/cart" component={Cart} routeType="protected" /> */}
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
      </Switch>
    </div>
  );
};

export default App;

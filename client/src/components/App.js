import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthRoute from "../util/route_util";
import oops from "./404"
import Nav from "./nav/nav";
import Login from "./session/login";
import Register from "./session/register";
import CampaignShow from "./campaigns/CampaignShow";
import Landing from "./landing";
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
      <Route path="/" component={Nav} />
       <Switch>
        {/* <Route extact path="/" component={Landing} /> */}
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
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/campaigns/:campaignId" component={CampaignShow} />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
        <Route path="/" component={oops} />
      </Switch>
    </div>
  );
};

export default App;

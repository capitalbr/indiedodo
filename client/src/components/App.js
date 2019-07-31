import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthRoute from "../util/route_util";
import oops from "./404"
import Nav from "./nav/nav";
import Login from "./session/login";
import Register from "./session/register";
import CampaignShow from "./campaigns/CampaignShow";
import CampaignCreate from "./campaigns/CampaignCreate";
import Landing from "./landing/landing";
import Footer from "./footer/footer";

const App = () => {
//   return (
//     <h1>We love animals!</h1>
//   )
// }
  return (
    <div>
      {/* <Route path="/" component={Nav} /> */}
      <Switch>
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/new-campaign" component={CampaignCreate} />
        <Route exact path="/campaigns/:campaignId" component={CampaignShow} />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/register" component={Register} routeType="auth" />
        <Route path="/" component={oops} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
};

export default App;

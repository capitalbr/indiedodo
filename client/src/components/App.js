import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthRoute from "../util/route_util";
import oops from "./404"
import Nav from "./nav/nav";
import CampaignShow from "./campaigns/CampaignShow";
import CampaignCreate from "./campaigns/CampaignCreate";
import Landing from "./landing/landing";
import Footer from "./footer/footer";
import Test from "./test"
import Checkout from "./checkout/checkout"
import SessionModal from "./modals/session";

const App = () => {
//   return (
//     <h1>We love animals!</h1>
//   )
// }
  return (
    <div>
      <Route path="/" component={SessionModal}/>
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/test" component={Test} />
        <AuthRoute exact path="/new-campaign" component={CampaignCreate} routeType="protected" />
        <Route exact path="/campaigns/:campaignId" component={CampaignShow} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/" component={oops} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
};

export default App;

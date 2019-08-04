import React from "react";
import { Query, ApolloConsumer } from "react-apollo";
import Queries from "../../graphql/queries";
import {
  FaQuestionCircle,
  FaAccusoft
} from "react-icons/fa"; 
import {Link} from "react-router-dom";
const { FETCH_USER, FETCH_CAMPAIGN, IS_LOGGED_IN, CURRENT_USER } = Queries;

export default class Checkout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      render: false
    }
    this.campaign = {title: "none"};
    this.logout = this.logout.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.button = "";
  }

  loggedIn(client){
    // return client.query({ query: IS_LOGGED_IN })
    // .then(({ data }) => {
    //   this.boolean = data.isLoggedIn;
    //   return data.isLoggedIn;
    // })
    return(
      <Query query={IS_LOGGED_IN}>
        {({ data }) => {
          this.data = data;
          return(
            data.isLoggedIn
          )
        }}
      </Query>
    )
  }

  logout(e, client){
    e.preventDefault();
    localStorage.removeItem("auth-token");
    localStorage.removeItem("current-user");
    client.writeData({
      data: {
        isLoggedIn: false,
        currentUser: null,
        cart: []
      }
    });
    this.setState({render: true})
    
    
  }


  
  render() {
    return <ApolloConsumer>
      {(client) => {
        this.client = client;
        
        /* this.loggedIn(client); */
        return (
          <div className="checkout-container">
            <div className="checkout-left">
              <div>
                <div className="checkout-left-info">
                  <Query
                    query={FETCH_USER}
                    variables={{ id: this.props.location.state.user_id }}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return 0;
                      if (error) return 0;
                      this.user = data.user;
                      return (
                        <Query
                          query={FETCH_CAMPAIGN}
                          variables={{ campaignId: this.props.location.state.perk.campaign}}
                        >
                          {({ loading, error, data }) => {
                            if (loading) return loading;
                            if (error) return error;
                            this.campaign = data.campaign
                            const token = localStorage.getItem("auth-token") || "1"
                            return (
                              <div>
                                <div>
                                  You're contributing to {this.user.name}'s
                                  <h1>{this.campaign.title}</h1>
                                </div>
                                
                                  
                                     <Query query={CURRENT_USER}
                                       variables={{ token }}>
                                        {({ loading, error, data }) => {
                                          if (loading) return loading;
                                          if (error) return error;
                                          if (data.currentUser.loggedIn) {
                                            return (
                                              <div className= "user-badge">
                                                
                                                  <div className="user-img-container">
                                                    <FaAccusoft className="user-img" />
                                                  </div> 
                                                  <div>
                                                  <div className="user-details">{data.currentUser.name}</div>
                                                  <div className="user-details">{data.currentUser.email}</div>
                                                  <div className="user-details">
                                                  <span>Not You? </span>
                                                  <a
                                                    href="#"
                                                    onClick={(e) => this.logout(e, this.client)}
                                                  >Logout</a>
                                                  </div>
                                                </div>
                                              </div>
                                            )
                                          } else {
                                            return (
                                              <div>
                                                <div className="user-details-guest">Guest User
                                                  <div className="login-link"><Link to="/login">Login</Link></div>
                                                </div>
                                              </div> 
                                            )
                                          }
                                        }}
                                      </Query>
                                
                              </div>
                            )
                          }}
                        </Query>
                      )
                    }}
                  </Query>
                </div>
              </div>


              <div></div>          
              

            </div>
            <div className="checkout-right">
              <div className="checkout-right-perk">
                <div className="checkout-right-review">
                  REVIEW YOUR CONTRIBUTION
                </div>
                <div className="checkout-right-perk-title">
                  {this.props.location.state.perk.title}
                </div>
                <div className="checkout-right-perk-description">
                  {this.props.location.state.perk.description}
                </div>
                <div className="checkout-perk-shipping">
                  <div className="checkout-perk-shipping-title">
                    Estimated Delivery
                  </div>
                  <div className="checkout-perk-shipping-est">
                    {this.props.location.state.perk.est_shipping}
                  </div>
                  <div className="checkout-perk-shipping-est">
                    <div className="shipping-popup-container">
                      <div id="shipping-popup">
                        <div>
                          This is the campaigner's best estimate as to when you might receive this perk. Delays may occur due to production and shipping challenges.
                        </div>
                      <div className="triangle"></div>
                      </div>
                      <FaQuestionCircle className="question-mark"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-right-summary">
                <div>
                  <div id="summary-title">CONTRIBUTION SUMMARY</div>
                </div>
                <div id="checkout-right-line"/>
                <div className="checkout-right-summary-info">
                  <div>{this.props.location.state.perk.title}</div>
                  <div>${this.props.location.state.perk.cost}.00 <span id="usd">USD</span></div>
                </div>
                <div className="checkout-right-summary-info">
                  <div>Shipping</div>
                  <div id="checkout-right-line-2" />
                </div>
                <div id="checkout-right-line-3" />
                <div className="checkout-right-summary-total">
                  <div className="checkout-right-summary-total-info">
                    Total
                  </div>
                  <div className="checkout-right-summary-total-info">${this.props.location.state.perk.cost}.00 <span id="usd">USD</span></div>
                </div>
              </div>
                  {/* <div> 
                    The payment will process in USD. The actual amount charged by your card issuer may differ from our estimate based on their exchange rate and any applicable fees.
                  </div> */}
              {/* <div className="checkout-right-not-shopping">
                  <div>
                    Crowdfunding is not shopping. Your donation is a way to support a project but does not guarantee that you will receive a perk.
                  </div>
                  <div>
                    You may request a full refund from Indiegogo until the campaign ends on August 29, 2019.
                  </div>
                  <div>
                    Any refunds after this date are the responsibility of the campaign owner, Dr Pocket , at their discretion.
                  </div>
              </div> */}
              <div className="checkout-right-tos">
                  <div className="checkout-right-privacy">
                    I agree to the Terms of Use and have read and understand the Privacy Policy.
                  </div>
                <div className="checkout-right-submit"><button className="checkout-right-submit-button">SUBMIT PAYMENT</button></div>
              </div>
            </div>
          </div>
        )
      }}
    </ApolloConsumer>
  }
}


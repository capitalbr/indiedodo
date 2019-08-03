import React from "react";
import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_USER } = Queries;

export default class Checkout extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state
  // }
  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-left">
          <div className="user-info">
            <Query
            query={FETCH_USER}
            variables={{ id: this.props.location.state.user_id}}
            >
              {({ loading, error, data }) => {
                if (loading) return 0;
                if (error) return 0;
                return (
                  <div>
                    <h3>{data.user.name}</h3>
                    <h3>{data.user.email}</h3>
                  </div>
                )
              }}
            </Query>
          </div>
          <h4> {this.props.location.state.perk.campaign}</h4>
          <h4> {this.props.location.state.perk._id}</h4>

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
            </div>
          </div>
          <div className="checkout-right-summary">
            <div>
              CONTRIBUTION SUMMARY
            </div>
            <div className="checkout-right-line"/>
            <div>
              <div>
                Total
              </div>
              <div>
                The payment will process in USD. The actual amount charged by your card issuer may differ from our estimate based on their exchange rate and any applicable fees.
              </div>
            </div>

            <div>

            </div>
          </div>
          <div className="checkout-right-not-shopping">
              <div>
                Crowdfunding is not shopping. Your donation is a way to support a project but does not guarantee that you will receive a perk.
              </div>
              <div>
                You may request a full refund from Indiegogo until the campaign ends on August 29, 2019.
              </div>
              <div>
                Any refunds after this date are the responsibility of the campaign owner, Dr Pocket , at their discretion.
              </div>
          </div>
          <div className="checkout-right-tos">
              <div>
                I agree to the Terms of Use and have read and understand the Privacy Policy.
              </div>
              <button>
                
              </button>
          </div>
        </div>
      </div>
    )
  }
}


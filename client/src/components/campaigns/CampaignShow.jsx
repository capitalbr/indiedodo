import React from "react";
import { Query } from "react-apollo";
import { FaAccusoft } from "react-icons/fa"; 

import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGN, FETCH_USER, FETCH_CAMPAIGN_CONTRIBUTIONS, FETCH_USER_CAMPAIGNS } = Queries;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AllContributions = (campaign_id, goal, end_date) => {
  // debugger
  return (
    <Query
      query={FETCH_CAMPAIGN_CONTRIBUTIONS}
      variables={{ campaignId: campaign_id }}
    >
      {({ loading, error, data }) => {
        if (loading) return 0;
        if (error) return 0;
        const { campaignContributions } = data;
        let total = 0;
        let numContributions = 0;
        let backerText = (numContributions > 0) ? "backers" : "backer";
        campaignContributions.forEach((contribution) => {
          total = total + Number(contribution.amount)
          numContributions = numContributions + 1;
        })
        let percent_raised = (total / goal * 100).toFixed(2);
        total = total.toFixed(0);
        const endDate = new Date(end_date);
        const  currDate = new Date();
        const diffTime = Math.abs(endDate.getTime() - currDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let dayText = (numContributions > 0) ? "days" : "day";
        return (
          <div>
            <div className="raised-text-cont">
               <div>
                  ${numberWithCommas(total)} USD raised
                </div>
                <div>
                {numberWithCommas(numContributions)} {backerText}
                </div>
            </div>
            <div className="raised-bar-cont">
              <div className="raised-bar" style={{ width: `${percent_raised}%`, maxWidth: "100%" }} />
            </div>
            <div className="raised-text-cont">
              <div>
                {percent_raised}% of ${numberWithCommas(goal.toFixed(0))} Flexible Goal
              </div>
              <div>
                {diffDays} {dayText} left
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);

    this.user = "";
  }
  
  render(){
    return (
      <div>
        <Query
          query={FETCH_CAMPAIGN}
          variables={{ campaignId: this.props.match.params.campaignId }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            this.user = data.campaign.user;
            this.contributions = AllContributions(this.props.match.params.campaignId, data.campaign.goal, data.campaign.end_date);
            // { title, tagline, overview, story, faq, image_url, category, goal, end_date } = data.campaign;
            return (
              <div>
                <div className="campaign-show-header">
                  <div>
                    <img src={data.campaign.image_url} alt='CampaignImage' />
                  </div>
                  <div className="campaign-show-header-info">
                    <div className="funding">FUNDING</div>
                    <div className="campaign-show-title">{data.campaign.title}</div>
                    <div className="campaign-show-overview">{data.campaign.overview}</div>
                    
                      <Query
                        query={FETCH_USER}
                        variables={{ id: this.user }}
                      >
                      {({ loading, error, data } ) => {
                          if (loading) return <p>Loading...</p>;
                          if (error) return <p>Error</p>;
                          return <div className="campaign-owner">
                            <div className="user-icon-show"><FaAccusoft className="user-img"/></div>
                          <div className="user-icon-show-info">
                              <div className="user-name">{data.user.name}</div>
                              <Query
                                query={FETCH_USER_CAMPAIGNS}
                                variables={{ userId: this.user }}
                              >
                                {({ loading, error, data }) => {
                                  if (loading) return <p>Loading...</p>;
                                  if (error) return <p>Error</p>;
                                  let c;
                                  if (data.userCampaigns.length > 1) {
                                    c = "Campaigns"
                                  } else {
                                    c = "Campaign"
                                  }
                                  return(
                                    <div className="campaign-amount">
                                      {data.userCampaigns.length} {c}
                                    </div>
                                  )
                                }}
                              </Query>
                            </div>
                          </div>
                      }}
                      </Query>
                {this.contributions}
                <div className="campaign-show-header-buttons">
                  <div className="backit">
                      <button>Backit</button>
                  </div>
                  <div className="follow">
                      <button>Follow</button>
                  </div>
                  <div className="share-icon-container-center">
                    <div className="share-icon-container">
                        <FaAccusoft className="share-icons" />
                        <FaAccusoft className="share-icons" />
                        <FaAccusoft className="share-icons" />
                  </div>
                  </div>
                  
                </div>
                  </div>
                </div>
                <p>Tagline: {data.campaign.tagline}</p>
                <p>Overview: {data.campaign.overview}</p>
                <p>Story: {data.campaign.story}</p>
                <p>Faq: {data.campaign.faq}</p>
                <p>Image URL: {data.campaign.image_url}</p>
                <p>Category: {data.campaign.category}</p>
                <p>End Date: {data.campaign.end_date}</p>
              </div>
            );
          }}
        </Query>

      </div>
    );
  }
};

export default CampaignShow;

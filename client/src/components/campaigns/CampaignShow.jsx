import React from "react";
import { Query } from "react-apollo";
import { FaAccusoft } from "react-icons/fa"; 

import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGN, FETCH_USER } = Queries;

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
                            <div className="user-icon-show"><FaAccusoft/></div>
                            {data.user.name}
                            {data.user.bio_header}
                          </div>
                      }}
                      </Query>
                  </div>
                </div>
                
                <p>Tagline: {data.campaign.tagline}</p>
                <p>Overview: {data.campaign.overview}</p>
                <p>Story: {data.campaign.story}</p>
                <p>Faq: {data.campaign.faq}</p>
                <p>Image URL: {data.campaign.image_url}</p>
                <p>Category: {data.campaign.category}</p>
                <p>Goal: {data.campaign.goal}</p>
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

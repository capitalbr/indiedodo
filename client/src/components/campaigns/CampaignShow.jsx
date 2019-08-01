import React from "react";
import { Query } from "react-apollo";

import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGN, FETCH_CAMPAIGN_CONTRIBUTIONS } = Queries;

const AllContributions = (campaign_id) => {
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
          campaignContributions.forEach((contribution) => {
            total = total + contribution.amount
          })
          return (
            <div>{total}</div>
          )
        }}
      </Query>
  )
}

const CampaignShow = props => {
  let contributions = AllContributions(props.match.params.campaignId);
  return (
    <div>
      <h2>Total Contributions: {contributions}</h2>
      {/* <Query
        query={FETCH_CAMPAIGN}
        variables={{ campaignId: props.match.params.campaignId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          debugger
          { title, tagline, overview, story, faq, image_url, category, goal, end_date } = data.campaign;
          return (
            <div>
              <p>Title: {data.campaign.title}</p>
              <p>Tagline: {data.campaign.tagline}</p>
              <p>Overview: {data.campaign.overview}</p>
              <p>Story: {data.campaign.story}</p>
              <p>Faq: {data.campaign.faq}</p>
              <p>Image URL: {data.campaign.image_url}</p>
              <p>Category: {data.campaign.category}</p>
              <h2>Total Contributions: {contributions}</h2>
              <p>Goal: {data.campaign.goal}</p>
              <p>End Date: {data.campaign.end_date}</p>
            </div>
          );
        }}
      </Query> */}
    </div>
  );
};

export default CampaignShow;

import React from "react";
import { Query } from "react-apollo";

import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGN } = Queries;

const CampaignShow = props => {
  return (
    <div>
      <Query
        query={FETCH_CAMPAIGN}
        variables={{ campaignId: props.match.params.campaignId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          // { title, tagline, overview, story, faq, image_url, category, goal, end_date } = data.campaign;
          return (
            <div>
              <p>Title: {data.campaign.title}</p>
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
};

export default CampaignShow;

import React from "react";
import { Link } from "react-router-dom";

const CampaignIndex = ({campaigns}) => {
  let camps = campaigns.map(({ _id, title, tagline, overview, story, faq, image_url, category, goal, end_date }) => (
    <li key={_id}>
      <Link to={`/campaigns/${_id}`}>
        <h4>{title}</h4>
      </Link>
      <p>Title: {title}</p>
      <p>Tagline: {tagline}</p>
      <p>Overview: {overview}</p>
      <p>Story: {story}</p>
      <p>Faq: {faq}</p>
      <p>Image URL: {image_url}</p>
      <p>Category: {category}</p>
      <p>Goal: {goal}</p>
      <p>End Date: {goal}</p>
    </li>
  ));
  return (
    <div>
      <ul>
        {camps}
      </ul>
    </div>
  );
};

export default CampaignIndex;

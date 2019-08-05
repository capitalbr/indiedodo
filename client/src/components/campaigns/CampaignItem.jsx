import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import {FaHeart, FaClock} from "react-icons/fa";
import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGN_CONTRIBUTIONS } = Queries;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AllContributions = (campaign_id, goal, end_date) => {
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
        const currDate = new Date();
        const diffTime = Math.abs(endDate.getTime() - currDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let dayText = (diffDays > 1) ? "days" : "day";
        return (
          <div>
            <div className="raised-text-cont">
              <div>
                ${numberWithCommas(total)} USD raised
                </div>
              <div>
                {numberWithCommas(percent_raised)}%
              </div>
            </div>
            <div className="raised-bar-item-cont">
              <div className="raised-bar" style={{ width: `${percent_raised}%`, maxWidth: "100%" }} />
            </div>
            <div className="raised-time-cont">
                <div>
                  <FaClock />
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

export default class CampaignItem extends React.Component{
  render(){
    let camp = this.props.campaign; 
    let contributions = AllContributions(camp._id, camp.goal, camp.end_date);
    return(
      <div className='campaign-listing'>
        <Link className='link-wrapper'to={`/campaigns/${camp._id}`}>
          <img className='campaign-image' src={camp.image_url} alt="campaign"/>
          <div className='campaign-summary'>
            <div className='campaign-header'>
              <h3>Funding</h3>
              <FaHeart />
            </div>
            <div className="campaign-body">
              <h1 className="title">{camp.title}</h1>
              <p>{camp.tagline}</p>
              <h3>{camp.category}</h3>
              {contributions}
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
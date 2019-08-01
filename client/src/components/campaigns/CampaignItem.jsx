import React from "react";
// import Link from "react-router-dom";
import {FaHeart, FaClock} from "react-icons/fa";
import ContributionTracker from "../contributions/ContributionTracker";

export default class CampaignItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.parseDate = this.parseDate.bind(this);
    this.dateDiff = this.dateDiff.bind(this);
  }

  parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
  }

  dateDiff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
  }

  render(){
    let camp = this.props.campaign; 

    return(
      <div className='campaign-listing'>
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
            <ContributionTracker />
            <div className='time-remaining'>
              <FaClock />
              <p>XX days left</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
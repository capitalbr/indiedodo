import React from "react";
import CampaignItem from "../campaigns/CampaignItem";

export default class Carousel extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const items = this.props.campaigns.map(camp => <CampaignItem campaign={camp} key={camp.id}/>);
    return (
      <div className='carousel-wrapper'>
        <ul className='carousel'>
          {items}
        </ul>
      </div>
    )
  }
}


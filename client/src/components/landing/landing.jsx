import React from "react";
import CampaignIndex from '../campaigns/CampaignIndex';
import CategoryIndex from '../categories/CategoryIndex';
import Carousel from '../carousel/carousel';
import News from '../news/news';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.setState({
      campaigns: {}
    });
  }

  render(){
    return (
      <div className='landing-main'>
        <div className='featured-container'>
          <Carousel type='featured' campaigns='featuredCamps'/>
        </div>
        <div className='trending-container'>
          <Carousel type='trending' campaigns='trendCamps'/>
        </div>
        <div className='categories-container'>
          <CategoryIndex/>
        </div>
        <div className='recents-container'>
          <CampaignIndex/>
        </div>
        <div className='news-container'>
          <News />
        </div>
      </div>
    )
  }
}

export default Landing;
import React from "react";
import CampaignIndex from '../campaigns/CampaignIndex';
import CategoryIndex from '../categories/CategoryIndex';
import Carousel from '../carousel/carousel';
import FeaturedCarousel from "../carousel/featuredCarousel";
import News from '../news/news';

import { Query } from "react-apollo";
import Queries from "../../graphql/queries";
const { FETCH_CAMPAIGNS } = Queries;
class Landing extends React.Component{
  render(){
    return (
        <Query query={FETCH_CAMPAIGNS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return(
              <div className='landing-main'>
                <div className='featured-container'>
                  <FeaturedCarousel campaigns={data.campaigns} />
                </div>
                <div className='trending-container'>
                  <Carousel campaigns={data.campaigns} type='trending' />
                </div>
                <div className='categories-container'>
                  <CategoryIndex />
                </div>
                <div className='recents-container'>
                  <Carousel campaigns={data.campaigns} type='recent' />
                </div>
                <div className='news-container'>
                  <News />
                </div>
              </div>
            );
          }}
        </Query>
    )
  }
}

export default Landing;
import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import CampaignItem from "../campaigns/CampaignItem";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
export default class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0,
      responsive: { 1024: { items: 1 } },
      featuredCampaigns: this.featuredCampaigns(),
    }
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  featuredCampaigns() {
    const featured = this.props.campaigns.slice(0,4);
    return featured.map(camp => { 
        return (
          <div className='featured-campaign'>
              {/* <img  className="featured-background" src={camp.image_url} alt={camp.title}/> */}
              <span className='featured-label'>DODOPICKS</span>
              <h1 className='featured-title'>{camp.title}</h1>
              <h1 className='featured-tagline'>{camp.tagline}</h1>
          </div>
        )
    });
  }

  render(){
    const { featuredCampaigns, responsive, currentIndex } = this.state
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={featuredCampaigns}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
        <div>
          <button className="prev-btn" onClick={() => this.slidePrev()}/>
          <button className="next-btn" button onClick={() => this.slideNext()}/>
        </div>
      </div>
    )
  }
}


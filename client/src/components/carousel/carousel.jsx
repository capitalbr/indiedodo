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
      responsive: { 1024: { items: 4 } },
      campaignItems: this.campaignItems(),
    }
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 4 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 4 })

  campaignItems() {
    return this.props.campaigns.map(camp => <CampaignItem campaign={camp} key={camp._id}/>);
  }

  render(){
    const { campaignItems, responsive, currentIndex } = this.state
    return (
      <div>
        <div className='carousel-header'>
          <h1>{this.props.type} Campaigns</h1>
          <div className='carousel-control'>
            <FaChevronLeft onClick={() => this.slidePrev()}/>
            <FaChevronRight button onClick={() => this.slideNext()}/>
          </div>
        </div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={campaignItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
      </div>
    )
  }
}


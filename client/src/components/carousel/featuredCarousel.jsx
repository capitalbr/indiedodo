import React from "react";
import { Link } from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import AliceCarousel from 'react-alice-carousel'
// import "react-alice-carousel/lib/alice-carousel.css"
import { withRouter } from 'react-router-dom';



class Carousel extends React.Component{
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
    return featured.map((camp, i) => { 
        return (
          <div
            className='featured-campaign'
            onClick={e => this.handleClick(e, camp)}>
              <div className='featured-frame'>
                <img  className="featured-background" src={camp.image_url} alt={camp.title}/>
              </div>
              <div className='featured-controls'>
                <span className='featured-label'>Featured</span>
                <h1 className='featured-title'>{camp.title}</h1>
                <h1 className='featured-tagline'>{camp.tagline}</h1>
                <div className='featured-link'> SEE CAMPAIGN</div>
                <div className='carousel-control'>
                  <button className="carousel-btn" onClick={() => this.slidePrev()}><FaChevronLeft/></button>
                  <button className="carousel-btn" onClick={() => this.slideNext()}><FaChevronRight/></button>
                  <span>{ (i + 1) + ' / ' + featured.length}</span>
                </div>
              </div>
          </div>
        )
    });
  }

  handleClick(e, camp) {
    debugger
    e.preventDefault();
    if (e.target.nodeName === "BUTTON" || e.target.nodeName === "svg" || e.target.nodeName === "path") {
      return;
    }
    this.props.history.push(`/campaigns/${camp._id}`)
  }

  render(){
    const { featuredCampaigns, responsive, currentIndex } = this.state
    return (
      <div className="carousel-container">
        <AliceCarousel
          autoPlayInterval={10000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={featuredCampaigns}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />
      </div>
    )
  }
}


export default withRouter(Carousel);

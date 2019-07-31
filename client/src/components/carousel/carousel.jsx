import React from "react";

export default class Carousel extends React.Component{
    render(){
      let {type, campaigns} = this.props;
      if(!type){
        return null;
      }
      let carousel;
      switch (type) {
        case 'featured':
          carousel = "https://i.imgur.com/aktoFCw.jpg";
          break;
        case 'trending':
          carousel = "https://i.imgur.com/Bbwl4Mq.jpg";
          break;
        case 'recent':
          carousel = "https://i.imgur.com/ANEH5Op.jpg";
          break;
        default:
          return null;
      }
      return <div className='carousel'>
        <img src={carousel} alt={type}/>
      </div>
    }
}

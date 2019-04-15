import React, { Component } from 'react';

class Hotel extends Component {

  render () 
  {
    return (
      <div className="hotel-list">
        <img src={this.props.hotelStaticContent.mainImage.url} className="photo"/>
        <div className="details">
          <div>
            {this.props.hotelStaticContent.name}
          </div>
          <div>
            {this.props.hotelStaticContent.neighborhoodName}
          </div>
        </div>
        <div className="price">
          {this.props.lowestAveragePrice.symbol}
          {this.props.lowestAveragePrice.amount}
          {this.props.rewards.miles}
          <button>Select</button>
        </div>
      </div>
    );
  }
}
  
export default Hotel;
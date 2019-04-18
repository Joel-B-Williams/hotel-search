import React, { Component } from 'react';
import Hotel from './Hotel'

class HotelList extends Component {

  render() {
    const error = this.props.error;
    const errorMessage = 
    <div className="status-message">
      <p>Something has gone horribly pear-shaped</p>
      <p>Please try again</p>
    </div>
    
    return (
      <div>
        {error ? 
        (errorMessage) : 
        (this.props.hotels
        .filter(hotel => hotel.hotelStaticContent.name.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
        .map((hotel) => (<Hotel key={hotel.id} {...hotel} />)) )}
      </div>
    )        
  }
}


export default HotelList;
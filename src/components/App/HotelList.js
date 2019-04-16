import React, { Component } from 'react';
import Hotel from './Hotel'

class HotelList extends Component {

  render() {
    const error = this.props.error;
    const errorMessage = "No hotels found, please try again"
    
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
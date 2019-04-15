import React, { Component } from 'react';
import Hotel from './Hotel'

class HotelList extends Component {

  render() {
    return (
      <div>
        { this.props.hotels.results ?
        this.props.hotels.results.hotels
        .filter(hotel => hotel.hotelStaticContent.name.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
        .map((hotel) => (<Hotel key={hotel.id} {...hotel} />)) : "Oops, no data found..." }
      </div>
    )        
  }
}

export default HotelList;
import React, { Component } from 'react';
import Hotel from './Hotel'

class HotelList extends Component {

  render() {
    const error = this.props.error;
    const empty = this.props.hotels
    .filter(hotel => hotel.hotelStaticContent.name.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0).length == 0;

    const errorMessage = 
    <div className="status-message">
      <p>Something has gone horribly pear-shaped</p>
      <p>Please try again</p>
    </div>
   
   const noResults = 
    <div className="status-message">
      <p>No properties found</p>
      <p>Please adjust search parameters</p>
    </div>
    
    return (
      <div>
        <div>
          {error ? 
          (errorMessage) : 
          (this.props.hotels
            .filter(hotel => hotel.hotelStaticContent.name.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((hotel) => (<Hotel key={hotel.id} {...hotel} />)) )}
        </div>
        <div>
          {empty && !error ?
          (noResults) :
          null}
        </div>
      </div>
    )        
  }
}


export default HotelList;
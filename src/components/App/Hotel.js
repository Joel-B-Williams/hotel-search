import React, { Component } from 'react';

class Hotel extends Component {

  defaultImage = (ev) => {
    ev.target.src = "https://i.imgur.com/qUvaEAl.png"
  }

  render () {
    return (
      <div className="hotel-list">
        <img src={this.props.hotelStaticContent.mainImage.url} onError={this.defaultImage} className="photo"/>
        <div className="details">
          <div className="hotel-name">
            {this.props.hotelStaticContent.name || "No name found" }
          </div>
          <div className="hotel-location">
            {this.props.hotelStaticContent.neighborhoodName || "Location unknown"}
          </div>
        </div>
        <div className="price">
          <table className="price-table">
            <tbody>
              <tr>
                <td>Per night: </td>
                <td className="price-per-night">
                  {/* find less risky method if possible */}
                  <p dangerouslySetInnerHTML={{__html: this.props.lowestAveragePrice.symbol}}></p>
                  {this.props.lowestAveragePrice.amount || "$$"}
                </td>
              </tr>
              <tr className="points-row">
                <td>Points earned:</td>
                <td className="points-earned">
                  {this.props.rewards.miles || "Reward unavailable"}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn hotel-btn">Select Now</button>
        </div>
      </div>
    );
  }
}
  
export default Hotel;
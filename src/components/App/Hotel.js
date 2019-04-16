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
          <div>
            {this.props.hotelStaticContent.name || "No name found" }
          </div>
          <div>
            {this.props.hotelStaticContent.neighborhoodName || "Location unknown"}
          </div>
        </div>
        <div className="price">
          <table>
            <tbody>
              <tr>
                <td>Price</td>
                <td>
                  {/* find less risky method if possible */}
                  <p dangerouslySetInnerHTML={{__html: this.props.lowestAveragePrice.symbol}}></p>
                  {this.props.lowestAveragePrice.amount || "$$"}
                </td>
              </tr>
              <tr>
                <td>Miles</td>
                <td>
                  {this.props.rewards.miles || "Reward unavailable"}
                </td>
              </tr>
            </tbody>
          </table>
          <button>Select</button>
        </div>
      </div>
    );
  }
}
  
export default Hotel;
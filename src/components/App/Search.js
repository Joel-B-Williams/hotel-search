import React, { Component } from 'react';

class Search extends Component {

  onChange  = event => {
    this.props.handleChange(event.target.value)
  }

  render() {
    return(
        <div className="filters">
            <label htmlFor="propertySearch">Search properties</label>
            <input 
              type="text" 
              onKeyUp={this.onChange} 
              id="propertySearch"
              placeholder="Property name"/>
            <button onClick={this.props.handleClick} className="btn">Price Low-to-High</button>
        </div>
    )
  }
}

export default Search;
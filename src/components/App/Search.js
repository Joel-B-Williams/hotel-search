import React, { Component } from 'react';

class Search extends Component {

  onChange  = event => {
    this.props.handleChange(event.target.value)
  }

  render() {
    return(
      <div className="filters">
          <label>Hotel name</label>
          <input type="text" onKeyUp={this.onChange} />
          <label>Price</label>
          <button onClick={this.props.handleClick}>sort</button>
      </div>
    )
  }
}

export default Search;
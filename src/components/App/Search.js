import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div className="filters">
          Hotel name
          <input type="text" />
          Price
          <button>sort</button>
      </div>
    )        
  }
}

export default Search;
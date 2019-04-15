import React, { Component } from 'react';
import axios from 'axios';
import './style.less';

import HotelList from './HotelList';
import Search from './Search';

class App extends Component {
    state = {
        hotels: {},
        searchTerm: '' 
    }

    componentDidMount() {
        axios
        .get('https://homework-app.rocketmiles.com/fe-homework/rates')
        .then(res => this.setState({hotels: res.data})) //TODO- parse apiData better- bad naming
        .catch(err => console.log(err));
        //TODO- set error logic here?
    }

    onChange = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
    }

    render() {
        this.state.hotels.results ? this.state.hotels.results.hotels : null
        return (
            <div className="app-container">
                <div className="content">
                    <Search onChange={this.onChange} />
                    <HotelList 
                        hotels={this.state.hotels}
                        searchTerm={this.state.searchTerm} 
                    />
                </div>
            </div>
        )
    }
}

export default App;

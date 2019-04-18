import React, { Component } from 'react';
import axios from 'axios';
import './style.less';

import HotelList from './HotelList';
import Search from './Search';

class App extends Component {
    state = {
        hotels: [],
        searchTerm: '',
        error: false 
    }

    componentDidMount() {
        axios
        .get('https://homework-app.rocketmiles.com/fe-homework/rates')
        .then(res => this.setState({ hotels: res.data.results.hotels }))
        .catch(err => this.setState({ error: true }));
    }

    handleChange = (searchTerm) => {
        this.setState({ searchTerm: searchTerm })
    }

    handleClick = () => {
        let hotels = this.state.hotels
        hotels.sort((a,b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount)
        this.setState({ hotels: hotels })
    }

    render() {
        return (
            <div className="app-container">
                <div className="content">
                    <div className="search-area">
                        <Search 
                            handleChange={this.handleChange} 
                            handleClick={this.handleClick} 
                        />
                    </div>
                    <HotelList 
                        hotels={this.state.hotels}
                        searchTerm={this.state.searchTerm}
                        error={this.state.error}
                    />
                </div>
            </div>
        )
    }
}

export default App;

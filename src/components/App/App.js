import React, { Component } from 'react';
import axios from 'axios';
import './style.less';

import Hotel from './Hotel';
import Search from './Search';

class App extends Component {
    state = {
        apiData: {}
    }

    componentDidMount() {
        axios
        .get('https://homework-app.rocketmiles.com/fe-homework/rates')
        .then(res => this.setState({apiData: res.data}))
        .catch(err => console.log(err));
    }

    render() {
        this.state.apiData.results ? console.log(this.state.apiData.results.hotels) : null
        return (
            <div className="app-container">
                <div className="content">
                    <Search />
                    <div>
                        { this.state.apiData.results ?
                        this.state.apiData.results.hotels.map((hotel) => (<Hotel key={hotel.id} {...hotel} />)) : "Oops, no data found..." }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

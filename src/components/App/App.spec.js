import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { create } from 'react-test-renderer';
import axios from 'axios';

jest.mock('axios');

describe('App', () => {
    const wrapper = shallow(<App />);
    
    const list = [
        {"id":"907","rewards":{"miles":10000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":579.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"},"name":"Omni Chicago Hotel & Suites Magnificent Mile","neighborhoodName":"Magnificent Mile"}},
        {"id":"908","rewards":{"miles":8000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":234.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/6/0/96/743/239/chidt-exterior-0227-hor-clsc_S.jpg"},"name":"Chicago Marriott Downtown Magnificent Mile","neighborhoodName":"Magnificent Mile"}},{"id":"87390","rewards":{"miles":12000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":123.0},"hotelStaticContent":{"mainImage":{"url":"http://d2whcypojkzby.cloudfront.net/imageRepo/1/0/16/99/327/012857_A_P.jpg"},"name":"Homewood Suites by Hilton Chicago-Lincolnshire","neighborhoodName":"Lincolnshire"}}
    ]
    
    it('renders the component', () => {
        expect(wrapper.find('.app-container').exists()).toBe(true);
    });
    
    it('matches snapshot', () => {
        const tree = create(<App />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    
    it('fetches a list of hotels', () => {
        const getSpy = jest.spyOn(axios, 'get');
        const app = shallow(<App/>);
        
        expect(getSpy).toBeCalled();
    });

    it('sorts by price', () => {

        wrapper.setState({hotels: list});
        const unsortedList = wrapper.state('hotels');

        expect(unsortedList[0].id).toEqual("907");
        
        wrapper.instance().handleClick();
        const sortedList = wrapper.state('hotels');
        
        expect(sortedList[0].id).toEqual("87390");
    });
});
import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelList from './HotelList';
import { create } from 'react-test-renderer';
import Hotel from './Hotel';

describe('HotelList', () => {
  const list = [
    {"id":"907","rewards":{"miles":10000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":579.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg"},"name":"Omni Chicago Hotel & Suites Magnificent Mile","neighborhoodName":"Magnificent Mile"}},
    {"id":"908","rewards":{"miles":8000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":234.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/6/0/96/743/239/chidt-exterior-0227-hor-clsc_S.jpg"},"name":"Chicago Marriott Downtown Magnificent Mile","neighborhoodName":"Magnificent Mile"}},{"id":"87390","rewards":{"miles":12000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":123.0},"hotelStaticContent":{"mainImage":{"url":"http://d2whcypojkzby.cloudfront.net/imageRepo/1/0/16/99/327/012857_A_P.jpg"},"name":"Homewood Suites by Hilton Chicago-Lincolnshire","neighborhoodName":"Lincolnshire"}}
  ];

    const wrapper = shallow(<HotelList 
      hotels={list} 
      searchTerm={''}
      error={false} />);
    
    it('renders the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('matches snapshot', () => {
      const comp = create(<HotelList 
        hotels={list} 
        searchTerm={''}
        error={false} />);

      expect(comp.toJSON()).toMatchSnapshot();
    });

    it('shows all results when not filtered', () => {
      const wrapper = mount(<HotelList 
        hotels={list} 
        searchTerm={''}
        error={false} />);

      expect(wrapper.find('Hotel').length).toEqual(list.length);
      wrapper.unmount();
    });

    it('shows filtered results', () => {
      const wrapper = mount(<HotelList 
        hotels={list} 
        searchTerm={'magnificent'}
        error={false} />);

      expect(wrapper.find('Hotel').length).toEqual(2);
      wrapper.unmount();
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Hotel from './Hotel';

describe('Hotel', () => {
    const hotel = {
      "rewards":{"miles":8000},"lowestAveragePrice":{"currency":"USD","symbol":"&#36;","amount":234.0},"hotelStaticContent":{"mainImage":{"category":"EXTERIOR","url":"http://d2whcypojkzby.cloudfront.net/imageRepo/6/0/96/743/239/chidt-exterior-0227-hor-clsc_S.jpg"},"name":"Chicago Marriott Downtown Magnificent Mile","neighborhoodName":"Magnificent Mile"}}
    
    const wrapper = shallow(<Hotel 
        hotelStaticContent={hotel.hotelStaticContent}
        lowestAveragePrice={hotel.lowestAveragePrice}
        rewards={hotel.rewards} />);

    it('renders the component', () => {
      expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });

    it('matches snapshot', () => {
      const comp = create(<Hotel 
        hotelStaticContent={hotel.hotelStaticContent}
        lowestAveragePrice={hotel.lowestAveragePrice}
        rewards={hotel.rewards} />);

      expect(comp.toJSON()).toMatchSnapshot();
    });
});
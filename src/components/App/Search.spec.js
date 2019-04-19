import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import { create } from 'react-test-renderer';

describe('Search', () => {
    const wrapper = shallow(<Search />);

    it('renders the component', () => {
      expect(wrapper.find('.filters').exists()).toBe(true);
    });

    it('matches snapshot', () => {
      const comp = create(<Search  />);
      
      expect(comp.toJSON()).toMatchSnapshot();
    });
});
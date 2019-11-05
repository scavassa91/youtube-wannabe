import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MemoryRouter initialEntries={[ { key: 'testKey' } ]}><SearchBar /></MemoryRouter>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

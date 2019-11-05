import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from './Home';

describe('<Home />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MemoryRouter initialEntries={[ { key: 'testKey' } ]}><Home /></MemoryRouter>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

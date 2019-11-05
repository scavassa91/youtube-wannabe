import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Video from './Video';

describe('<Video />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<MemoryRouter initialEntries={[ { key: 'testKey' } ]}><Video /></MemoryRouter>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

import React from 'react';

import { shallow } from 'enzyme';

import VideoItem from './VideoItem';

describe('<VideoItem />', () => {
    const mockVideo =  {
        snippet: {
            title: "test",
            thumbnails: {
                medium: {
                    url: "htpp://youtube.com"
                }
            }
        }
    };
    it('Should render an <VideoItem /> element', () => {
        const wrapper = shallow(<VideoItem video={mockVideo} />);
        expect(wrapper.find('img').prop('src')).toEqual(mockVideo.snippet.thumbnails.medium.url);
        expect(wrapper.find('img').prop('alt')).toEqual(mockVideo.snippet.title);
        expect(wrapper.find('.header').text()).toEqual(mockVideo.snippet.title);
    });
});
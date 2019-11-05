import React from 'react';

import { shallow } from 'enzyme';

import VideoDetail from './VideoDetail';

describe('<VideoDetail />', () => {
    const mockVideo =  {
        id: {
            videoId: 2
        },
        snippet: {
            description: 'Video description',
            title: "test1"
        }
    };
    const mockVideoSrc = `https://www.youtube.com/embed/${mockVideo.id.videoId}`;
    it('Should render an <VideoDetail /> element', () => {
        const wrapper = shallow(<VideoDetail video={mockVideo} />);

        expect(wrapper.find('h4').text()).toEqual(mockVideo.snippet.title);
        expect(wrapper.find('p').text(0)).toEqual(mockVideo.snippet.description);
        expect(wrapper.find("iframe").prop("src")).toEqual(mockVideoSrc);
    });
});

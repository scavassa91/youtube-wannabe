import React from 'react';

import { shallow } from 'enzyme';

import VideoList from './VideoList';
import VideoItem from '../VideoItem/VideoItem';

describe('<VideoList />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<VideoList videos={[]} />);
    });
    
    it('Should render a <VideoItem /> element for each video', () => {
        const mockVideoList = [
            {
                id: {
                    videoId: 1
                },
                snippet: {
                    title: "test",
                    thumbnails: {
                        medium: {
                            url: "htpp://youtube.com"
                        }
                    }
                }
            },
            {
                id: {
                    videoId: 2
                },
                snippet: {
                    title: "test1",
                    thumbnails: {
                        medium: {
                            url: "htpp://youtube1.com"
                        }
                    }
                }
            }
        ];
        wrapper.setProps({videos: mockVideoList});
        expect(wrapper.find(VideoItem)).toHaveLength(2);
    });

    it('renders a loading label', () => {
        wrapper.setProps({videos: []});
        expect(wrapper.text()).toEqual("Loading...");
    });
});


// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';

// import VideoList from './VideoList';

// let container = null;
// beforeEach(() => {
//     // setup a DOM elemente as a render target
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });

// it('renders a list of videos', () => {
//     const mockVideoList = [
//         {
//             id: {
//                 videoId: 1
//             },
//             snippet: {
//                 title: "test",
//                 thumbnails: {
//                     medium: {
//                         url: "htpp://youtube.com"
//                     }
//                 }
//             }
//         },
//         {
//             id: {
//                 videoId: 2
//             },
//             snippet: {
//                 title: "test1",
//                 thumbnails: {
//                     medium: {
//                         url: "htpp://youtube1.com"
//                     }
//                 }
//             }
//         }
//     ];
//     act(() => {
//         render(<VideoList videos={mockVideoList} />, container);
//     });
//     expect(container.querySelectorAll('.video-item').length).toEqual(mockVideoList.length);
// });

// it('renders a loading label', () => {
//     const mockVideoList = [];
//     act(() => {
//         render(<VideoList videos={mockVideoList} />, container);
//     });
//     expect(container.textContent).toBe("Loading...");
// });
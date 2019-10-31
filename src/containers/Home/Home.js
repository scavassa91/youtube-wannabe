import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import VideoList from '../../components/VideoList/VideoList';

import './Home.css';

const Home = () => {
    const history = useHistory();
    const search = (useLocation().state || {}).search || [];

    const onVideoSelect = (video) => {
        history.push({
            pathname: '/video',
            state: {
                id: video.id.videoId
            }
        });
    };

    return (
        <div className="ui container">
            <div className="ui grid video-list">
                <VideoList onVideoSelect={onVideoSelect} videos={search}/>  
            </div>
            
        </div>
    );
}

export default Home;
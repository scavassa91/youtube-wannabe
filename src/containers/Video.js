import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CancelToken } from 'axios';

import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

const Video = (props) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { id } = useLocation().state;
    let cancel = [];

    const getRelatedVideos = async id => {
        const response = await youtube.get('/search', {
            params: {
                relatedToVideoId: id
            },
            cancelToken: new CancelToken(c => {
                cancel.push(c);
            })
        });

        setVideos(response.data.items);
    };

    const getVideoById = async id => {
        const response = await youtube.get('/videos', {
            params: {
                id
            },
            cancelToken: new CancelToken(c => {
                cancel.push(c);
            })
        });

        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
        getRelatedVideos(video.id.videoId);
    };

    useEffect(() => {
        getVideoById(id);
        getRelatedVideos(id);

        return () => cancel.forEach(c => c());
    }, []);

    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail video={selectedVideo} /></div>
                    <div className="five wide column"><VideoList onVideoSelect={onVideoSelect} videos={videos}/></div>
                </div>
            </div>
            
        </div>
    );
}

export default Video;
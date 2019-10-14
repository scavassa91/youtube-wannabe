import axios from 'axios';

const KEY = 'AIzaSyCFrBIgcFYKK3bh-0j4qrnf1SwJlcdPZno';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
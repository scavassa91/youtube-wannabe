import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import youtube from '../../apis/youtube';

import './SearchBar.css';

const  SearchBar = () => {
    const [term , setTerm] = useState('');
    const history = useHistory();

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const searchTerm = async query => {
        const response = await youtube.get('/search', {
            params: {
                q: query,
                maxResults: 20
            }
        });
        history.push('/', {
            search: response.data.items
        });
    };

    const onFormSubmit = async event => {
        event.preventDefault();
        searchTerm(term);
    };

    useEffect(() => {
        searchTerm(term);
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            searchTerm(term);
        }, 1000);
        return () => clearTimeout(handler);
    }, [term]);

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}/>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;
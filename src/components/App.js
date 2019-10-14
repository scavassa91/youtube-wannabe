import React from 'react';

import Home from '../containers/Home';
import Video from '../containers/Video';
import SearchBar from '../components/SearchBar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {

    

    return (
        <Router>
            <div>
                <SearchBar />
                <Switch>
                    <Route path="/video">
                        <Video />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
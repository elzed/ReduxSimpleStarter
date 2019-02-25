import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// Access key via account.API_KEY
const account = require('./api_key');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: account.API_KEY, searchterm: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                {/*passing prop videos to VideoList*/}
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));

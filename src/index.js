import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDX_xIYBLH4tVb15ZAaVAUrK51D0TSiTbc';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [] ,
            selectedVideo: null
        }
        this.videoSearch('surfboard');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return(
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList onVideoSelect = {video => this.setState({selectedVideo: video})} videos = {this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
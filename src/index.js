// Import react
// Go find the 'react' library from node_modules and assign it to React variable so this file can use it.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube api key
const API_KEY = 'AIzaSyCOikGitYBBuKqY9jVbV81sggypognwvV4';
//Create a Component

//const is ES6 type and we cannot reassign any value to variable App

// This is ES6 syntax
// const App = () => {
//   return <div>Hello Sling!!</div>;
// }


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({videos}) //ES6 syntax same as this.setState({videos: videos})
    });
  }

  render() {

    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
};

//Render a Component
// ReactDOM.render(App) - Do not pass App directly since it is a class, create an instance like below
ReactDOM.render(<App />, document.querySelector('.container'));

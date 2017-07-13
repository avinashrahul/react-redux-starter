// Import react
// Go find the 'react' library from node_modules and assign it to React variable so this file can use it.
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

// Youtube api key
const API_KEY = 'AIzaSyCOikGitYBBuKqY9jVbV81sggypognwvV4';
//Create a Component

//const is ES6 type and we cannot reassign any value to variable App

// This is ES6 syntax
// const App = () => {
//   return <div>Hello Sling!!</div>;
// }
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = function() {
  return(
    <div>
      <SearchBar />
    </div>
  );
};

//Render a Component
// ReactDOM.render(App) - Do not pass App directly since it is a class, create an instance like below
ReactDOM.render(<App />, document.querySelector('.container'));

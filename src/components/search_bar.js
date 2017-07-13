import React, {Component} from 'react';

// This is a functional component.
// To leverage more from this component lets make it a class component.
// const SearchBar = () => {
//   return(
//     <input />
//   );
// };

// This is a class component
class SearchBar extends Component{
    render() {
      return <input />;
    }
}

export default SearchBar;

import React, {Component} from 'react';

// This is a functional component.
// To leverage more from this component lets make it a class component.
// const SearchBar = () => {
//   return(
//     <input />
//   );
// };

// This is a class component and need to inherit all properties from react
class SearchBar extends Component{
    render() {
      return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
      console.log(event.target.value);
    }
}

export default SearchBar;

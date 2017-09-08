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
    // Whenever searchbar component gets called constructor gets executed by default.
    // whenever some state changes inside constructor render and all sub menthods gets called.
    constructor(props) {
      super(props);
      this.state = {term: ''};
    }
    render() {
      return(
        <div>
        // Whenever set state is called component immediately rerenders
          <input onChange={event => this.setState({term: event.target.value})} />
          Value {this.state.term}
        </div>
      );
    }
}

export default SearchBar;

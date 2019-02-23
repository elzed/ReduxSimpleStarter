import React, { Component } from 'react';

// A functional component
// const SearchBar = () => {
//     return <input/>
// };

// A Class-based component
class SearchBar extends Component { // gives searchBar extra functionality
    render() {  // this is how a method on a Class look
        return <input onChange={this.onInputChange} />
    }

    onInputChange() {

    }
}

export default SearchBar;

import React, { Component } from 'react';

// A functional component
// const SearchBar = () => {
//     return <input/>
// };

// A Class-based component
class SearchBar extends Component { // gives searchBar extra functionality
    constructor(props) {
        super(props);

        this.state = { searchterm: '' };
    }


    render() {return <input onChange = { event => console.log(event.target.value) } />}
}

export default SearchBar;

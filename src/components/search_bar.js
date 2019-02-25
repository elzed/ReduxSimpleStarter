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

    render() {
        return (
            <div>
                <input
                value = { this.state.searchterm }
                onChange = { event => this.setState({ searchterm: event.target.value }) } />
            </div>
        );
    }
}

export default SearchBar;

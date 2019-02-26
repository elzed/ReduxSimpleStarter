import React, { Component } from 'react';

// A Class-based component
class SearchBar extends Component { // gives searchBar extra functionality
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                value = { this.state.term }
                onChange = { event => this.setState({ term: event.target.value }) } />
            </div>
        );
    }
}

export default SearchBar;

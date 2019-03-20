import React from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'
import debounce from 'lodash/debounce'

class Search extends React.Component {
    constructor(){
      super();
      this.handleChange = this.handleChange.bind(this);
      this.debouncedHandleChange = debounce(this.debouncedHandleChange.bind(this), 500);
      this.state = {
        searchText : '',
        searchResults: []
      }
    }

    debouncedHandleChange(value){
      console.log(value)
      BooksAPI.search(value).then((books) => {
        console.log(books)
        debugger;
        this.setState({searchResults:books})
      });
    }

    handleChange(event) {
      this.setState({searchText: event.target.value})
      this.debouncedHandleChange(event.target.value); // sending only the values not the entire event
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search">Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author" autoFocus="autofocus" 
                  value={this.state.searchText} onChange={this.handleChange}/>
              </div>
            </div>
            <SearchResults searchText={this.state.searchText} searchResults={this.state.searchResults} updateShelf={this.props.updateShelf}/>
          </div>
        )
    }
}

export default Search
import React from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class Search extends React.Component {
    constructor(){
      super();
      this.state = {
        searchText : ''
      }
    }

    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                  <button className="close-search">Close</button>
                </Link>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author" autofocus="autofocus" 
                  value={this.state.searchText}/>
              </div>
            </div>
            <SearchResults />
          </div>
        )
    }
}

export default Search
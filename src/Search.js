import React from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class Search extends React.Component {
    constructor(){
      super();
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        searchText : ''
      }
    }

    handleChange(event) {
      this.setState({searchText:event.target.value})
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
                  value={this.state.searchText} onChange={this.handleChange}/>
              </div>
            </div>
            <SearchResults searchText={this.state.searchText}/>
          </div>
        )
    }
}

export default Search
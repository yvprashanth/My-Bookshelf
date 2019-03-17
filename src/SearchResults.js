import React from 'react'
import * as BooksAPI from './BooksAPI'

class SearchResults extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        fetch('')
    }

    render(){
        return (
        <div className="search-books-results">
            <ol className="books-grid">
                
            </ol>
        </div>)
    }
}

export default SearchResults
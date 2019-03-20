import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchResults extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
        <div className="search-books-results">
            <ol className="books-grid">
                {(this.props.searchResults && this.props.searchResults.length) > 0 ? this.props.searchResults.map((book) => {
                    return (
                    <li key={book.id}>
                        <Book bookDetails={book} updateShelf={this.props.updateShelf} />
                    </li>
                    )
                }) : "No Search Results? Try Astronomy, Android, Film, Fantasy, Cricket, Philosophy"}
            </ol>
        </div>)
    }
}

export default SearchResults
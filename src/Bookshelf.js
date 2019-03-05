import React from 'react'
import './App.css'
import Book from './Book'

class Bookshelf extends React.Component {
    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title"></h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book bookDetails={book} updateShelf={this.props.updateShelf} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}


export default Bookshelf
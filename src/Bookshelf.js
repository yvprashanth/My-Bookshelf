import React from 'react'
import './App.css'
import Book from './Book'

class Bookshelf extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.selfbooks.filter(item => item.shelf === "currentlyReading").map((book) => {
                            return (
                            <li key={book.id}>
                                <Book bookDetails={book} updateShelf={this.props.updateShelf} />
                            </li>
                            )
                        })}
                    </ol>
                </div>
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.selfbooks.filter(item => item.shelf === "wantToRead").map((book) => {
                            return (
                            <li key={book.id}>
                                <Book bookDetails={book} updateShelf={this.props.updateShelf} />
                            </li>
                            )
                        })}
                    </ol>
                </div>
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.selfbooks.filter(item => item.shelf === "read").map((book) => {
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
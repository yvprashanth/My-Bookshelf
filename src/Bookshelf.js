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
                        {this.props.selfbooks.map((book) => {
                            return (
                            <li key={book.id}>
                                <Book bookDetails={book} updateShelf={this.props.updateShelf} />
                            </li>
                            )
                        })}}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
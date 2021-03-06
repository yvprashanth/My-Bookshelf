import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width:128, height:193, backgroundImage: `url(${this.props.bookDetails.imageLinks.thumbnail})`}}>
                       <ShelfChanger book={this.props.bookDetails} updateShelf={this.props.updateShelf} shelf={this.props.bookDetails.shelf ? this.props.bookDetails.shelf : "none"}/>
                    </div>
                </div>
                <div className="book-title">{this.props.bookDetails.title}</div>
                <div className="book-authors">{this.props.bookDetails.authors}</div>
            </div>
        )
    }
}

export default Book
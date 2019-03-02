import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width:128, height:192, backgroundImage: `url(${this.props.bookDetails.imageLinks.thumbnail})`}}>
                       <ShelfChanger />
                    </div>
                    <div className="book-title">{this.props.bookDetails.title}</div>
                    <div className="book-authors">{this.props.bookDetails.authors[0]}</div>
                </div>
            </div>
        )
    }
}

export default Book
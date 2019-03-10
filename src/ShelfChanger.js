import React from 'react'
import './App.css'

class ShelfChanger extends React.Component {
    render(){
        const { book, updateShelf, shelf } = this.props 
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={(e) => updateShelf(e, book)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger
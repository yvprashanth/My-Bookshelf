import React from 'react'
import './App.css'

class ShelfChanger extends React.Component {
    render(){
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="currentlyReading">Want to Read</option>
                    <option value="currentlyReading">Read</option>
                    <option value="currentlyReading">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger
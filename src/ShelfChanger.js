import React from 'react'
import './App.css'

class ShelfChanger extends React.Component {
    onShelfChange(e){
        debugger;
        this.props.handleChange(e, this.props.book);
    }

    render(){
        return (
            <div className="book-shelf-changer" onChange={this.onShelfChange.bind(this)}>
                <select>
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
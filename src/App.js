import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Book from './Book'
import _ from 'lodash';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.updateShelf = this.updateShelf.bind(this);
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    showSearchPage: false
  }

  updateShelf(e, book) {
    book.shelf = e.target.value;
    var newBooks = this.state.books;
    var index = _.findIndex(newBooks, function(num) {
      return num.id === book.id
    });
    if (index > -1) {
      newBooks.splice(index,1);
    }
    this.setState({
      // shelfName: [...this.state.shelfName, newelement]
    })
    // this.setState()
    // assuming you initialized the default state to hold selected values
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Book Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Bookshelf selfbooks={this.state.books} updateShelf={this.updateShelf}/> 
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

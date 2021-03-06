import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import _ from 'lodash';
import Search from './Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    var index = _.findIndex(this.state.books, function(num) {
      return num.id === book.id
    });
    if (index > -1) {
      this.state.books.splice(index,1);
    }
    this.setState({
      books: [...this.state.books, book]
    })
    toast.info("Book shelf changed !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  render() {
    return (
      <div className="app">    
          <Route path="/" exact render={()=> (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>Prashanth Bookreads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <Bookshelf selfbooks={this.state.books} updateShelf={this.updateShelf}/> 
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button>Add a book</button>
                  </Link>
                </div>
              </div>
          )}/>
          <Route path="/search" render={(props) => <Search {...props} updateShelf={this.updateShelf} />} />
          <ToastContainer />
      </div>
    )
  }
}

export default BooksApp

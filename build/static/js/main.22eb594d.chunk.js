(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},33:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(17),r=a.n(s),l=a(32),c=a(3),i=a(4),u=a(7),h=a(5),d=a(6),b=a(9),m=a(19),p="https://reactnd-books-api.udacity.com",f=localStorage.token;f||(f=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:f},E=(a(12),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.updateShelf,n=e.shelf;return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:n,onChange:function(e){return a(e,t)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),t}(o.a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(this.props.bookDetails.imageLinks.thumbnail,")")}},o.a.createElement(E,{book:this.props.bookDetails,updateShelf:this.props.updateShelf,shelf:this.props.bookDetails.shelf?this.props.bookDetails.shelf:"none"}))),o.a.createElement("div",{className:"book-title"},this.props.bookDetails.title),o.a.createElement("div",{className:"book-authors"},this.props.bookDetails.authors))}}]),t}(o.a.Component),j=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.selfbooks.filter(function(e){return"currentlyReading"===e.shelf}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(v,{bookDetails:t,updateShelf:e.props.updateShelf}))}))),o.a.createElement("h2",{className:"bookshelf-title"},"Want To Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.selfbooks.filter(function(e){return"wantToRead"===e.shelf}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(v,{bookDetails:t,updateShelf:e.props.updateShelf}))}))),o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.selfbooks.filter(function(e){return"read"===e.shelf}).map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(v,{bookDetails:t,updateShelf:e.props.updateShelf}))}))))}}]),t}(o.a.Component),O=a(29),g=a.n(O),y=a(62),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},(this.props.searchResults&&this.props.searchResults.length)>0?this.props.searchResults.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement(v,{bookDetails:t,updateShelf:e.props.updateShelf}))}):"No Search Results? Try Astronomy, Android, Film, Fantasy, Cricket, Philosophy"))}}]),t}(o.a.Component),N=a(30),C=a.n(N),R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.debouncedHandleChange=C()(e.debouncedHandleChange.bind(Object(b.a)(Object(b.a)(e))),500),e.state={searchText:"",searchResults:[]},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"debouncedHandleChange",value:function(e){var t,a=this;console.log(e),(t=e,fetch("".concat(p,"/search"),{method:"POST",headers:Object(m.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:t})}).then(function(e){return e.json()}).then(function(e){return e.books})).then(function(e){console.log(e),a.setState({searchResults:e})})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({searchText:t}),this.debouncedHandleChange(t.trim())}},{key:"render",value:function(){return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(y.a,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",autoFocus:"autofocus",value:this.state.searchText,onChange:this.handleChange}))),o.a.createElement(S,{searchText:this.state.searchText,searchResults:this.state.searchResults,updateShelf:this.props.updateShelf}))}}]),t}(o.a.Component),D=a(64),T=a(18),w=(a(58),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={books:[],showSearchPage:!1},a.updateShelf=a.updateShelf.bind(Object(b.a)(Object(b.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updateShelf",value:function(e,t){t.shelf=e.target.value;var a=g.a.findIndex(this.state.books,function(e){return e.id===t.id});a>-1&&this.state.books.splice(a,1),this.setState({books:[].concat(Object(l.a)(this.state.books),[t])}),Object(T.toast)("Book shelf changed!")}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(D.a,{path:"/",exact:!0,render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"Prashanth Bookreads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement(j,{selfbooks:e.state.books,updateShelf:e.updateShelf}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(y.a,{to:"/search"},o.a.createElement("button",null,"Add a book"))))}}),o.a.createElement(D.a,{path:"/search",render:function(t){return o.a.createElement(R,Object.assign({},t,{updateShelf:e.updateShelf}))}}),o.a.createElement(T.ToastContainer,null))}}]),t}(o.a.Component)),x=(a(60),a(63));r.a.render(o.a.createElement(x.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.22eb594d.chunk.js.map
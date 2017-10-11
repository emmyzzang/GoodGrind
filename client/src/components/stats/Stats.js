import React, { Component } from 'react';
import API from "../../util/axiosApi.js";



class Stats extends React.Component {
  state = {
    feelings:[],
    reasons: []
  };

  componentDidMount() {
    this.getFeelings();
    this.getReasons()
  }

  getFeelings = () => {
      API.getFeelings()

        .then( res =>
          {
            let dataArray = []

            for(var i = 0; i < res.data.length; i++) {
              dataArray.push(String(res.data[i].reasonList))
            }

            this.setState({ feelings: res.data[0].feeling }, function () {console.log(this.state.feelings)})
          }
      )
        .catch(err => console.log(err));
      };


  shouldComponentUpdate(nextProps, nextState) {
    return this.state.feelings !== nextState.feelings;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.reasons !== nextState.reasons;
  }

  getReasons = () => {
    API.getReasons()
      .then( res =>
      {
        let dataArray = []

        for(var i = 0; i < res.data.length; i++) {
          dataArray.push(res.data[i].reasonList)
        }

        this.setState({
          reasons: dataArray }, function() {console.log(this.state.reasons)})
        })
      }

  render() {
    return (
      <div className='statsDiv'>
        <h1> {String(this.state.feelings)} </h1>
        <h1> {this.state.reasons} </h1>
        <h1> state is not rendering ... </h1>
      </div>
    )
  }
}


export default Stats;






// renderList = () => {
//   // for(var i = 0; i < res.data.length; i++)
//   let list = document.getElementById("statsDiv");
//   list.appendChild(<li> this.state.feelings </li>)
//
//   console.log(this.state.feelings)
//   // }
// }


// import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
//
// class Books extends Component {
//   state = {
//     books: [],
//     title: "",
//     author: "",
//     synopsis: ""
//   };
//
//   componentDidMount() {
//     this.loadBooks();
//   }
//
//   loadBooks = () => {
//     API.getBooks()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };
//
//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };
//
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };
//
//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }
//
// export default Books;
//

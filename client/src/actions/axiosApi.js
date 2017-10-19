import axios from "axios";

export default {
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Gets the book with the given id
  getFeelings: function() {
    return axios.get("http://127.0.0.1:3000/api/feelings/");
  },
  getReasons: function() {
    return axios.get("http://127.0.0.1:3000/api/reasons/");
  },
  getToDo: function() {
    return axios.post("http://127.0.0.1:3000/api/todo");
  },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  saveReason: function(reasonList) {
    return axios.post("http://127.0.0.1:3000/api/reasons", reasonList);
  },
  // Saves a book to the database
  saveFeeling: function(feelingData) {
    return axios.post("http://127.0.0.1:3000/api/feelings", feelingData);
  },

  saveToDo: function(item) {
    return axios.post("http://127.0.0.1:3000/api/todo", item);
  }
};

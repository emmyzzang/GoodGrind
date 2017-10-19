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

  getGoals: function() {
    return axios.get("http://127.0.0.1:3000/api/goals");
  },
  // Deletes the book with the given id
  deleteGoal: function(goal) {
    return axios.delete("http://127.0.0.1:3000/api/goals", goal);
  },
  saveReason: function(reasonList) {
    return axios.post("http://127.0.0.1:3000/api/reasons", reasonList);
  },
  // Saves a book to the database
  saveFeeling: function(feelingData) {
    return axios.post("http://127.0.0.1:3000/api/feelings", feelingData);
  },

  saveGoals: function(goal) {
    return axios.post("http://127.0.0.1:3000/api/goals", goal);
  }
};

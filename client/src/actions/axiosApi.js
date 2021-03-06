import axios from "axios";

export default {
  // Frontend is doing an http request via axios to the backend server.
  // It passes email such that you can get user's data.
  getFeelings: function(email) {
    console.log('frontend - email: ' + email);
    return axios.get("http://127.0.0.1:3000/api/feelings/",
          {
            params: { email: email }
          }
        );
  },
  getReasons: function(email, feeling) {
    return axios.get("http://127.0.0.1:3000/api/reasons/",
          {
            params: { email: email,
                      feeling: feeling}
          }
        );
  },
  getPositiveReasons: function(email) {
    return axios.get("http://127.0.0.1:3000/api/reasons/",
          {
            params: { email: email,
                      feeling: 1}
          }
        );
  },
  getNeutralReasons: function(email) {
    return axios.get("http://127.0.0.1:3000/api/reasons/",
          {
            params: { email: email,
                      feeling: 0}
          }
        );
  },
  getSadReasons: function(email) {
    return axios.get("http://127.0.0.1:3000/api/reasons/",
          {
            params: { email: email,
                      feeling: -1}
          }
        );
  },
  getGoals: function(email) {
    return axios.get("http://127.0.0.1:3000/api/goals",
      {
        params: { email: email }
      }
    );
  },
  // Deletes the book with the given id
  deleteGoal: function(goal, email) {
    return axios.delete("http://127.0.0.1:3000/api/goals", {
      params: {
        goal: goal,
        email: email
      }
  })
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

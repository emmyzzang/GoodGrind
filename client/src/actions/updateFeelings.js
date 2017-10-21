import React, { Component } from "react";
import API from "./axiosApi";

  // So update.js connects to updateFeelings via function call, and updates feelings,
  // which goes to axiosApi, which emits http requests to the backend server.
  // Then the backend server uses sequelize to connect to the db
  // Then it gets a callback function and returns a response of the results. 
  const UpdateFeelings = (fluf) => {
    if (fluf) {

      var email = localStorage.getItem('email');
      API.saveFeeling({
        feeling: fluf,
        email: email
      })
        .then(function(res){
          localStorage.setItem('feelingId',res.data.id);
          console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

export default UpdateFeelings

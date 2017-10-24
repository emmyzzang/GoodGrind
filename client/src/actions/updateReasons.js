import React, { Component } from "react";
import API from "./axiosApi";
import path from "path";

// Update.js connects to UpdateReasons via function call, and updates reasons,
// which goes to axiosApi, which emits http requests to the backend server.
// Then the backend server uses sequelize to connect to the db
// Then it gets a callback function and returns a response of the results.
  const UpdateReasons = (reasons) => {


    var feelingId = localStorage.getItem('feelingId');

    reasons.forEach( reason => {
      API.saveReason({
        reasonList: reason,
        feelingId: feelingId
      })
      .then(function(res){
        console.log(res.reason)
      })
      .catch(err => console.log(err));
    })
  };

export default UpdateReasons

import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const updateReasons = (reasons) => {
    reasons.forEach( reason => {
      API.saveReason({
        reasonList: reason
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    })
  };


export default updateReasons

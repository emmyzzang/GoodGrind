import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const updateReasons = (reasons) => {
    console.log(reasons)
    if (reasons) {
      API.saveReason({
        reasonList: reasons
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };


export default updateReasons

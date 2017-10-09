import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const updateFeelings = (feeling) => {
    console.log(feeling)
    if (feeling) {
      API.saveFeeling({
        feeling: feeling
      })
        .then(res => this.loadFeelings())
        .catch(err => console.log(err));
    }
  };

export default updateFeelings

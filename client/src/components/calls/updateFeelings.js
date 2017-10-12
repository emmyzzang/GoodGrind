import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const updateFeelings = (fluf) => {
    if (fluf) {
      API.saveFeeling({
        feeling: fluf
      })
        .then(res => this.loadFeelings())
        .catch(err => console.log(err));
    }
  };

export default updateFeelings

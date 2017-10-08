import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const updateFeelings = (date, feeling) => {
    console.log(date)
    console.log(feeling)
    if (date && feeling) {
      API.saveFeeling({
        date: date,
        feeling: feeling
      })
        .then(res => this.loadFeelings())
        .catch(err => console.log(err));
    }
  };

export default updateFeelings

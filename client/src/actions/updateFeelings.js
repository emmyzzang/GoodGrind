import React, { Component } from "react";
import API from "./axiosApi";


  const UpdateFeelings = (fluf) => {
    if (fluf) {
      API.saveFeeling({
        feeling: fluf
      })
        .then(res => console.log(res.feeling))
        .catch(err => console.log(err));
    }
  };

export default UpdateFeelings

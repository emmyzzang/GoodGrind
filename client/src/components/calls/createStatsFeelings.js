import React, { Component } from "react";
import API from "../../util/axiosApi.js";


  const api = {
    getFeelings() {
      return Promise.resolve({
        data: [
          { feeling: 'test' }
        ]
      })
    }
  }

  // const getFeelings = () => {
  //     API.getFeelings()
  //       .then( res =>
  //         console.log(res)
  //     )
  //       .catch(err => console.log(err));
  //     };

export default getFeelings

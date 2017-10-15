import React, { Component } from 'react';
import API from "../../util/axiosApi.js";
import { LineChart, Line } from 'recharts';


class Linegraph extends React.Component {
  state = {
    data: [0, 1, 1, 8, 9, 9, 9, 8, 1, 9, 9, 1, 9, 7, 2, 5, 3]
  };

  render() {
    return (
        <LineChart width={4000} height={4000} data={this.state.data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    )
  }
}

export default Linegraph;

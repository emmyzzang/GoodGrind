import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

class Goals extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: [0,1,2,3,4,5,6,7,8]
  }

render() {
  return (

    <div className='td-form'>
      Goals Page

      <LineChart width={400} height={400} data={this.state.fieldThree}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>



    </div>
      );
    }
  }

export default Goals;

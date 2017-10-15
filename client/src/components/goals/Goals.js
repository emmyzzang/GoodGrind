import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

class Goals extends Component {
  state = {
    fieldOne: '',
    fieldTwo: '',
    fieldThree: ''

  }

render() {
  return (

    <div className='td-form'>
      Goals Page

      <LineChart width={400} height={400} data={{ name: 'Hello World', value: [5, 12] }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>



    </div>
      );
    }
  }

export default Goals;

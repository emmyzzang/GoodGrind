import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter } from 'victory';

const data = [
  {x: 'M', y: 0},
  {x: 'T', y: 0.5},
  {x: 'W', y: 1.0},
  {x: 'Th', y: 1.5},
  {x: 'F', y: 2.0},
];

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore"
];

const polarInterpolations = [
  "basis",
  "cardinal",
  "catmullRom",
  "linear"
];

const InterpolationSelect = ({ currentValue, values, onChange }) => (
  <select onChange={onChange} value={currentValue} style={{ width: 75 }}>
    {values.map(
      (value) => <option value={value} key={value}>{value}</option>
    )}
  </select>
);

class Goals extends React.Component {
  constructor() {
    super();
    this.state = {
      interpolation: "linear",
      polar: false
    };
  }
  render() {
    return (
      <div>
        <InterpolationSelect
          currentValue={this.state.interpolation}
          values={this.state.polar ? polarInterpolations : cartesianInterpolations }
          onChange={(event) => this.setState({ interpolation: event.target.value })}
        />
        <br />
        <label htmlFor="polar">polar</label>
        <VictoryChart polar={this.state.polar} height={200}>
          <VictoryLine
            interpolation={this.state.interpolation} data={data}
            style={{ data: { stroke: "#80cbc4"} }}
          />
          <VictoryScatter data={data}
            size={5}
            style={{ data: { fill: "#80cbc4"} }}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default Goals;

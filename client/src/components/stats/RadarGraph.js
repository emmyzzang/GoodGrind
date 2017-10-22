import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,
  VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryZoomContainer,
  VictoryBrushContainer, VictoryPolarAxis } from 'victory';
import API from "../../actions/axiosApi.js";


const reasonsData = [
  { "help": 1, "paranoid boss": 250, "youretheworst": 1, "everythingisterrible": 40, "bad culture" :10 },
  { "help": 2, "paranoid boss": 300, "youretheworst": 2, "everythingisterrible": 80, "bad culture": 90 },
  { "help": 5, "paranoid boss": 225, "youretheworst": 3, "everythingisterrible": 60, "bad culture": 120 }
];


class RadarGraph extends Component {
  state = {
    reasons: []
  };


componentDidMount() {
  var email = localStorage.getItem('email');
  this.getReasons(email);
}

shouldComponentUpdate(nextProps, nextState) {
  return this.state.reasons !== nextState.reasons;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: this.processData(characterData),
//       maxima: this.getMaxima(characterData)
//     };
//   }

getReasons = (email) => {
    API.getReasons(email)

    .then( res =>

    let reasonsArray = [];

    for(let i = 0; i < res.data.length; i++) {
      var temp = new Object();



      const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map((d) => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = (d) => {
      return Object.keys(d).map((key) => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map((datum) => makeDataArray(datum));
  }

  render() {
    return (
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup colorScale={["gold", "orange", "tomato"]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />

      </VictoryChart>
    );
  }
}

export default RadarGraph;

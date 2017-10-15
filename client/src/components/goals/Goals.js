import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,
  VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryZoomContainer,
  VictoryBrushContainer} from 'victory';

class Goals extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    return (
      <div>
        <VictoryChart width={400} height={200} scale={{x: "time"}}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
            <VictoryLine
              style={{
                data: {stroke: "cadetblue"}
              }}
              data={[
                {a: new Date(2017, 10, 1), b: -1},
                {a: new Date(2017, 10, 2), b: 0},
                {a: new Date(2017, 10, 3), b: 1},
                {a: new Date(2017, 10, 4), b: 0},
                {a: new Date(2017, 10, 5), b: -1},
                {a: new Date(2017, 10, 6), b: 1},
                {a: new Date(2017, 10, 7), b: 1},
                {a: new Date(2017, 10, 8), b: 1}
              ]}
              x="a"
              y="b"
            />

          </VictoryChart>
      </div>
    );
  }
}

export default Goals;

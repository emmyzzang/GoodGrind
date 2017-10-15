import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip } from 'victory';

class Goals extends React.Component {
  render() {
    return (
      <VictoryChart height={200} width={400}
        containerComponent={<VictoryVoronoiContainer/>}
      >
          <VictoryGroup
            color="#c43a31"
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{fontSize: 10}}
              />
            }
            data={[
              {x: 1, y: -3},
              {x: 2, y: 5},
              {x: 3, y: 3},
              {x: 4, y: 0},
              {x: 5, y: -2},
              {x: 6, y: -2},
              {x: 7, y: 5}
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
          <VictoryGroup
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{fontSize: 10}}
              />
            }
            data={[
              {x: 1, y: 3},
              {x: 2, y: 1},
              {x: 3, y: 2},
              {x: 4, y: -2},
              {x: 5, y: -1},
              {x: 6, y: 2},
              {x: 7, y: 3}
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
       </VictoryChart>
    );
  }
}

export default Goals;

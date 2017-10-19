import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,
  VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryZoomContainer,
  VictoryBrushContainer} from 'victory';
import API from "../../actions/axiosApi.js";

class Stats extends Component {
  state = {
    feelings:[],
    reasons: []
  };

  componentDidMount() {
    this.getFeelings();
    this.getReasons()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.feelings !== nextState.feelings;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.reasons !== nextState.reasons;
  }

  getFeelings = () => {
      API.getFeelings()

        .then( res =>
          {
            let feelingArray = [];
            let feelingdateArray = [];

            for(var i = 0; i < res.data.length; i++) {
              var temp = new Object();
              // Maps incoming data (res.data[i]) into the feelingArray
              // Data must be in the format - {a: new Date(2017-10-30T04:11:23.000Z), b: +1}
              // in order to work in victory charts
              // TODO -
              // need to construct a bar chart by building a data model (from online example)
              // a: is respect to the X-Axis (Reason Fieldname)
              // b: is respect to the Y-Axis (Count)
              temp["a"] = new Date(res.data[i].createdAt);
              temp["b"] = Number(res.data[i].feeling);
              feelingArray.push(temp);
            }

            this.setState({ feelings: feelingArray }, function () {console.log(this.state.feelings)})
          }
      )
        .catch(err => console.log(err));
   };

   getReasons = () => {
     API.getReasons()
       .then( res =>
       {
         let dataArray = []

         for(var i = 0; i < res.data.length; i++) {
           dataArray.push(res.data[i].reasonList)
         }

         console.log('Reasons Data: ' +dataArray);

         this.setState({ reasons: dataArray }, function() {console.log(this.state.reasons)})
         })
       };


  render() {
    return (
      <div>
        <VictoryChart width={500} height={250} scale={{x: "time"}}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
            />
          }
        >
            <VictoryLine
              style={{
                data: {stroke: "#80cbc4",

                        }
              }}

              data={this.state.feelings}
              x="a"
              y="b"
            />

            <VictoryScatter data={this.state.feelings}
            x="a"
            y="b"
                size={3}
                style={{ data: { fill: "#80cbc4"} }}
            />

            <VictoryAxis crossAxis
              standalone={false}
            />
          <VictoryAxis dependentAxis crossAxis
            domain={[-2, 2]}
            orientation="left"
            standalone={false}
          />

          </VictoryChart>
      </div>

    // TODO - Fix a lot of shit. Note to self: stop being a noob scrub with state.
    //   <div>
    //    <VictoryChart height={400} width={400}
    //      domainPadding={{x: 50, y: [0, 20]}}
    //      scale={{x: "time"}}
    //    >
    //      <VictoryBar
    //        dataComponent={
    //          <Bar events={{ onMouseOver: handleMouseOver }}/>
    //        }
    //        style={this.state.style}
    //        data={[
    //          {x: new Date(1986, 1, 1), y: 2},
    //          {x: new Date(1996, 1, 1), y: 3},
    //          {x: new Date(2006, 1, 1), y: 5},
    //          {x: new Date(2016, 1, 1), y: 4}
    //        ]}
    //      />
    //    </VictoryChart>
    //  </div>

    );
  }
}

export default Stats;

import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryStack, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,
  VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryZoomContainer,
  VictoryBrushContainer} from 'victory';
import API from "../../actions/axiosApi.js";


// const myDataset = [
//   [
//       {x: "New Opportunities", y: 1},
//       {x: "meh", y: 2},
//       {x: "Boss", y: 3},
//       {x: "Test", y: 2},
//       {x: "Incoming", y: 1}
//   ]
// ];


class Stats extends Component {
  state = {
    feelings:[],
    reasons: []
  };

  componentWillMount() {
    console.log('componentDidMount executed');
    var email = localStorage.getItem('email');
    this.getFeelings(email);
    this.getAllReasons(email);
    // this.transformData(this.state.reasons);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.feelings !== nextState.feelings
    || this.state.positiveReasons !== nextState.positiveReasons
    || this.state.neutralReasons !== nextState.neutralReasons
    || this.state.sadReasons !== nextState.sadReasons;
  }

  getFeelings = (email) => {
      API.getFeelings(email)

        .then( res =>
          {
            let feelingArray = [];
            let feelingdateArray = [];

            for(var i = 0; i < res.data.length; i++) {
              var temp = new Object();
              // Maps incoming data (res.data[i]) into the feelingArray
              // Data must be in the format - {a: new Date(2017-10-30T04:11:23.000Z), b: 1}
              // in order to work in victory charts
              // TODO -
              // need to construct a bar chart by building a data model (from online example)
              // a: is respect to the X-Axis (Reason Fieldname)
              // b: is respect to the Y-Axis (Count)
              temp['a'] = new Date(res.data[i].createdAt);
              temp['b'] = Number(res.data[i].feeling);
              feelingArray.push(temp);
            }
            console.log('feelingArray: ' + JSON.stringify(feelingArray));
            // var JSONifyIt = JSON.stringify(feelingArray);
            var another = JSON.stringify(feelingArray);

            this.setState({ feelings: feelingArray });
          }
      )
        .catch(err => console.log(err));
   };

  //  getReasons = (email) => {
  //    API.getReasons(email)
  //      .then( res =>
  //      {
  //        let dataArray = []
   //
  //        for(var i = 0; i < res.data.length; i++) {
  //          dataArray.push(res.data[i].reasonList)
  //        }
   //
  //        console.log('Reasons Data: ' + dataArray);
   //
  //        this.setState({ reasons: dataArray });
  //        })
  //      };

       getAllReasons = (email) => {
         console.log('getAllReasons execute');
         // Get Happy Reasons
         API.getReasons(email, 1)
           .then( res =>
           {
             // Populate Positive Reasons
             var positiveReasons = [];
             positiveReasons.push(res.data);

             positiveReasons = this.transformData(positiveReasons);

             // Populate Field Names of Positive Reasons
             var positiveReasonsFieldName = [];
             for(var i = 0; i < res.data.length; i++) {
               positiveReasonsFieldName.push(res.data[i].x);
             }

             console.log('Positive Reasons Data: ' + JSON.stringify(positiveReasons));
             console.log('Positive Reasons Field Name' + JSON.stringify(positiveReasonsFieldName));
             this.setState({ positiveReasons: positiveReasons});
             this.setState({positiveReasonsFieldName: positiveReasonsFieldName});
             })
           // Get Neutral Reasons
           API.getReasons(email, 0)
             .then( neutralRes =>
             {
               // Populate Positive Reasons
               var neutralReasons = [];
               neutralReasons.push(neutralRes.data);

               neutralReasons = this.transformData(neutralReasons);

               // Populate Field Names of neutral Reasons
               var neutralReasonsFieldName = [];
               for(var i = 0; i < neutralRes.data.length; i++) {
                 neutralReasonsFieldName.push(neutralRes.data[i].x);
               }

               console.log(' Reasons Data: ' + JSON.stringify(neutralReasons));
               console.log('neutral Reasons Field Name' + JSON.stringify(neutralReasonsFieldName));
               this.setState({neutralReasons: neutralReasons});
               this.setState({neutralReasonsFieldName: neutralReasonsFieldName});
               })
             // Get Sad Reasons
             API.getReasons(email, -1)
               .then( sadRes =>
               {
                 // Populate Positive Reasons
                 var sadReasons = [];
                 sadReasons.push(sadRes.data);

                 sadReasons = this.transformData(sadReasons);

                 // Populate Field Names of sad Reasons
                 var sadReasonsFieldName = [];
                 for(var i = 0; i < sadRes.data.length; i++) {
                   sadReasonsFieldName.push(sadRes.data[i].x);
                 }

                 console.log('Sad Reasons Data: ' + JSON.stringify(sadReasons));
                 console.log('Sad Reasons Field Name' + JSON.stringify(sadReasonsFieldName));
                 this.setState({ sadReasons: sadReasons});
                 this.setState({sadReasonsFieldName: sadReasonsFieldName});
                 })
           };

       // This is an example of a function you might use to transform your data to make 100% data
    transformData(dataset) {

      console.log('input dataset: ' + dataset);
      const totals = dataset[0].map((data, i) => {
        return dataset.reduce((memo, curr) => {
          return memo + curr[i].y;
        }, 0);
      });
      return dataset.map((data) => {
        return data.map((datum, i) => {
          return {x: datum.x, y: datum.y};
        });
      });
    }


  render() {
    const styles = this.getStyles();

    // const dataset = this.transformData(this.state.reasons);
    const positiveDataset = this.state.positiveReasons || [];
    const neutralDataset = this.state.neutralReasons || [];
    const sadDataset = this.state.sadReasons || [];

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
                data: {stroke: "#80cbc4"}
              }}

              data={this.state.feelings}
              x="a"
              y="b"
            />

            <VictoryScatter data={this.state.feelings}
            x="a"
            y="b"
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

          <h1>Positive Chart</h1>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            width={700} height={400}
          >
          {
            positiveDataset.map((data, i) => {
              return <VictoryBar data={data} key={i-1}
              style={{ data: { fill: "#80cbc4", strokeWidth: 5 } }}
              />;
            })
          }
          <VictoryAxis
            style={styles.custom} />
            <VictoryAxis dependentAxis
              orientation="left"
              standalone={false}
              style={styles.custom}
            />
          </VictoryChart>


          <h1>Neutral Chart</h1>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            width={700} height={400}
          >
          {
            neutralDataset.map((data, i) => {
              return <VictoryBar data={data} key={i-1}
              style={{ data: { fill: "#80cbc4", strokeWidth: 5 } }}
              />;
            })
          }
          <VictoryAxis
            style={styles.custom} />
            <VictoryAxis dependentAxis
              orientation="left"
              standalone={false}
              style={styles.custom}
            />
          </VictoryChart>

          <h1>Sad Chart</h1>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            width={700} height={400}
          >
          {
            sadDataset.map((data, i) => {
              return <VictoryBar data={data} key={i-1}
              style={{ data: { fill: "#80cbc4", strokeWidth: 5 } }}
              />;
            })
          }
          <VictoryAxis
            style={styles.custom} />
            <VictoryAxis dependentAxis
              orientation="left"
              standalone={false}
              style={styles.custom}
            />
          </VictoryChart>
      </div>
    );
  }


  getStyles() {
      return {
        // INDEPENDENT AXIS
        custom: {
          tickLabels: {
            fill: "black",
            fontFamily: "inherit",
            fontSize: 8
          }
        },
        lineWidth: {
            data: { stroke: "#e95f46", strokeWidth: 2 }
        }
      };
    }

}

// Working Backup
// <VictoryChart
//     height={400}
//     width={800}
//     domainPadding={{x: 30, y: 20}}
// >
//     <VictoryStack
//       colorScale={["black", "blue", "tomato"]}
//     >
//       {dataset.map((data, i) => {
//         return <VictoryBar data={data} key={i}/>;
//       })}
//     </VictoryStack>
//     <VictoryAxis dependentAxis />
//     <VictoryAxis
//       tickFormat={this.state.positiveReasonsFieldName}
//     />
// </VictoryChart>


// End of Working Backup
export default Stats;

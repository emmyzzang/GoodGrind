import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';
import { render } from 'react-dom';
import { VictoryChart, VictoryStack, VictoryTheme, VictoryBar, VictoryLabel, VictoryAxis, VictoryLine, VictoryScatter,
  VictoryVoronoiContainer, VictoryGroup, VictoryTooltip, VictoryZoomContainer,
  VictoryBrushContainer} from 'victory';
import API from "../../actions/axiosApi.js";


const myDataset = [
  [
      {x: "New Opportunities", y: 1},
      {x: "meh", y: 2},
      {x: "Boss", y: 3},
      {x: "Test", y: 2},
      {x: "Incoming", y: 1}
  ]
];


class Stats extends Component {
  state = {
    feelings:[],
    reasons: []
  };

  componentWillMount() {
    console.log('componentDidMount executed');
    var email = localStorage.getItem('email');
    this.getFeelings(email);
    this.getPositiveReasons(email);
    // this.transformData(this.state.reasons);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.feelings !== nextState.feelings
    || this.state.positiveReasons !== nextState.positiveReasons
    || this.state.positiveReasonsFieldName !== nextState.positiveReasonsFieldName;
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

   getReasons = (email) => {
     API.getReasons(email)
       .then( res =>
       {
         let dataArray = []

         for(var i = 0; i < res.data.length; i++) {
           dataArray.push(res.data[i].reasonList)
         }

         console.log('Reasons Data: ' + dataArray);

         this.setState({ reasons: dataArray });
         })
       };

       getPositiveReasons = (email) => {
         console.log('getPositiveReasons execute');
         API.getPositiveReasons(email)
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
           };

           getNeutralReasons = (email) => {
             API.getNeutralReasons(email)
               .then( res =>
               {
                 let dataArray = []

                 for(var i = 0; i < res.data.length; i++) {
                   dataArray.push(res.data[i].reasonList)
                 }

                 console.log('Neutral Reasons Data: ' + dataArray);

                 this.setState({ reasons: dataArray });
                 })
               };

           getSadReasons = (email) => {
             API.getSadReasons(email)
               .then( res =>
               {
                 let dataArray = []

                 for(var i = 0; i < res.data.length; i++) {
                   dataArray.push(res.data[i].reasonList)
                 }

                 console.log('Sad Reasons Data: ' + dataArray);

                 this.setState({ reasons: dataArray });
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
    // const dataset = this.transformData(this.state.reasons);
    const dataset = this.state.positiveReasons || [];

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
            domainPadding={10}
          >
          {
            dataset.map((data, i) => {
              return <VictoryBar data={data} key={i-1}/>;
            })
          }

          </VictoryChart>

      </div>
    );
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

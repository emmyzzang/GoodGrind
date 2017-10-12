import React, { Component } from 'react';
import API from "../../util/axiosApi.js";



/////////

// whitebaording
//
// My thoughts of some of the stats:
//
// Feelings: This table's feeling key three numbers: -1 , 0, 1.
// -1:  This means the person selected that they were unhappy. This causes the graph to go down over time.
// 0:  This means the person is okay in their role.  Neither happy or sad so the graph line is flat over time.
// +1: This means the person is happy in their role!  This should cause the graph to render upwards over time.
//
// Reasons: Can have multiple reasons for any Single day.
//
// I have two graph ideas here (Or any others you want!)
//     Pie chart that displays 1-5 top reasons they are unhappy at work, the size of the pie, within the chat,
//        is dependent on how many times they have selected that particular reason.
//     Some kind of graph that displays what was selected for each day (I'm not sure what kind would be best here.
//         since there are multiple items selected for each day, I'm not sure how to best render that.)



class Stats extends React.Component {
  state = {
    feelings:[],
    reasons: []
  };

  componentDidMount() {
    this.getFeelings();
    this.getReasons()
  }

  getFeelings = () => {
      API.getFeelings()

        .then( res =>
          {
            let dataArray = []

            for(var i = 0; i < res.data.length; i++) {
              dataArray.push(String(res.data[i].reasonList))
            }

            this.setState({ feelings: res.data[0].feeling }, function () {console.log(this.state.feelings)})
          }
      )
        .catch(err => console.log(err));
      };


  shouldComponentUpdate(nextProps, nextState) {
    return this.state.feelings !== nextState.feelings;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.reasons !== nextState.reasons;
  }

  getReasons = () => {
    API.getReasons()
      .then( res =>
      {
        let dataArray = []

        for(var i = 0; i < res.data.length; i++) {
          dataArray.push(res.data[i].reasonList)
        }

        this.setState({ reasons: dataArray }, function() {console.log(this.state.reasons)})
        })
      }

  render() {
    return (
      <div className='statsDiv'>
        <h1> {String(this.state.feelings)} </h1>
        <h1> {this.state.reasons} </h1>
      </div>
    )
  }
}


export default Stats;

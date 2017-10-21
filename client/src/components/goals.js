import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import API from "../actions/axiosApi.js";


class Goals extends Component {

  state = {
    goalList: [],
    goal: ''
  };
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);


    // When the component mounts, load all books and save them to this.state.books
  componentWillMount() {
    this.loadGoals();
  }

    // Loads all books  and sets them to this.state.books
  loadGoals = () => {
    API.getGoals()
      .then(res => {

        let goalListInFunction = []

        for(var i = 0; i < res.data.length; i++) {
          goalListInFunction.push(res.data[i].goal)
        }
        this.setState({goalList: this.state.goalList.concat(goalListInFunction)})
      })
      .catch(err => console.log(err));
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goalList !== nextState.goalList;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goal !== nextState.goal;
  }

  deleteGoal = goal => {
    API.deleteGoal(goal)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit() {
      API.saveGoals({
        goal: this.state.goal
      })
      .then(res => console.log('goal submited'))
      .catch(err => console.log('error submitting goal'))
  }

  //adjust to also get the id from the API.
  //save state with an array/object with ID(if wording doesn't work)
  //
render() {
  return (

    <div>
      <div>
        <h1 id='goalsWord'>Goals</h1>
        <div> { this.state.goalList.map( (goal) => (<div> <li id ='goalOutput'> {goal} </li>
          <button id = 'goalBye' value={goal} onClick={() => this.deleteGoal(goal)}> Delete </button> </div>))} </div>
      </div>

      <div id='goalInputDiv'>
          <input id='goalInput'
            value= {this.state.value}
            name = 'goal'
            onChange={this.handleChange.bind(this)}
          />
      </div>

      <h2 id ='goalsWord'onClick={() => this.handleSubmit()}> Add Goal </h2>
    </div>
      );
    }
  }

export default Goals;

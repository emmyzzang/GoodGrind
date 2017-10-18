import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../actions/axiosApi.js";


class Goals extends Component {

 constructor(props) {
  super(props);
  this.state = {
    goalList: [],
    goal: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

    // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadGoals();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.goalList !== nextState.goalList;
  }
    // Loads all books  and sets them to this.state.books
  loadGoals = () => {
    API.getGoals()
      .then(res => {
        let goalListInFucntion = [...res.data]
        this.setState({goalList: this.state.goalList.concat(goalListInFucntion)})
        document.getElementById('#goalList').innerHTML = this.state.goalList
      })
      .catch(err => console.log(err));

  };

    // Deletes a book from the database with a given id, then reloads books from the db
  deleteGoal = id => {
    // API.deleteGoal(id)
    //   .then(res => this.loadBooks())
    //   .catch(err => console.log(err));
  };

    // Handles updating component state when the user types into the input field
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
      API.saveGoal({
        goal: this.state.goal
      })
      .then(res => console.log('goal submited'))
      .catch(err => console.log('error submitting goal'))
  }

render() {
  return (

    <div>
      <div>
        <h1>Goals</h1>
        <div id='goalList'> </div>
      </div>

      <div>
          <input
            value= {this.state.value}
            name = 'goal'
            onChange={this.handleChange}
          />
      </div>

      <h2 onClick={(event) => handleSubmit(event)}> Add Goal </h2>
    </div>
      );
    }
  }

export default Goals;

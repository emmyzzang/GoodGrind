import React, { Component } from 'react';
// MEGAMAN
class Login extends Component {
  state = {
    userName: '',
    password: '',
    ofMatters: 'initialization value'
  }

  thisIsATest = myInput => {
    this.setState({ ofMatters: myInput });
  };

render() {
  return (
    // Create a form based on a column
    <div className='td-form'>

    Login

        <input
          name='userName'
          value={this.state.userName}
          onChange={(event) => {
            this.setState({
              userName: event.target.userName
            })
          }} />

          <input
            name='password'
            value={this.state.password}
            onChange={(event) => {
              this.setState({
                password: event.target.password
              })
            }} />

      <button onClick={() => {
        this.thisIsATest('CAN I GET A WOOT WOOT?!?!');
      }}>
          Submit -
        </button>

        {this.state.ofMatters}

      </div>
      );
    }
  }

// Because we are exporting the class
export default Login;

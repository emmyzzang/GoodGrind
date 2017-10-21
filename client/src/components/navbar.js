import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';


class Navbar extends Component {

  renderLinks() {

    if (this.props.authenticated) {
      // show a link to sign out
      return [<li id = 'navbar'><Link to={"/dashboard"}><FontAwesome name='tachometer' />&nbsp;Dashboard</Link></li>,
      <li id = 'navbar' key={1}><Link to={"/update"}><FontAwesome name='pencil' />&nbsp;Update</Link></li>,
      <li id = 'navbar' key={2}><Link to={"/goals"}><FontAwesome name='rocket' />&nbsp;Goals</Link></li>,
      <li id = 'navbar' key={3}><Link to={"/stats"}><FontAwesome name='line-chart' />&nbsp;Stats</Link></li>,
      <li id = 'navbar' key={4}><Link to={"/signout"}><FontAwesome name='sign-out' />&nbsp;Sign Out</Link></li>
    ];
    } else {
      // show a link to sign in or sign up
      return [
        <li id = 'navbar' key={1}><Link to={"/signin"}><FontAwesome name='sign-in' />&nbsp;Sign In</Link></li>,
        <li id = 'navbar' key={2}><Link to={"/signup"}><FontAwesome name='user-plus' />&nbsp;Sign Up</Link></li>
      ];

    }
  }


  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="good"><h1 id='goodname'>GOOD</h1><h1 id='grindname'>GRIND</h1></div> <br> </br>
        <hr />

        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}



export default connect(mapStateToProps) (Navbar);

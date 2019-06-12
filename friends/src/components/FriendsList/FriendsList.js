import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Friends from './Friends';

import axios from 'axios';

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({friendsList: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Route
          path='/'
          render={props => <Friends {...props} friendsList={this.state.friendsList} />}
        />
      </div>
    );
  }
}

export default FriendsList;

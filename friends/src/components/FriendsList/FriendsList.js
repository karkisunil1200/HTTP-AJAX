import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Friends from './Friends/Friends';
import FriendForm from './FriendForm/FriendForm';

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

  addFriend = item => {
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Route
          path='/'
          render={props => <Friends {...props} friendsList={this.state.friendsList} />}
        />
        <FriendForm addFriend={this.addFriend} />
      </div>
    );
  }
}

export default FriendsList;

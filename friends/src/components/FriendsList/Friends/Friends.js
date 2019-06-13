import React from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = props => {
  console.log(props);
  return (
    <div className='friend-container'>
      <h1 className='title'>Friends List</h1>
      <div className='Friends'>
        {props.friendsList.map(friends => {
          return <Friend friend={friends} key={friends.id} />;
        })}
      </div>
    </div>
  );
};

export default Friends;

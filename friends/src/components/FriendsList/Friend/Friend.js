import React from 'react';
import {Link} from 'react-router-dom';
import './Friend.css';

const Friend = props => {
  return (
    <div className='Friend'>
      <Link>
        <h2>Name: {props.friend.name}</h2>
      </Link>
      <h4>Age: {props.friend.age}</h4>
      <h4>Email: {props.friend.email}</h4>
    </div>
  );
};

export default Friend;

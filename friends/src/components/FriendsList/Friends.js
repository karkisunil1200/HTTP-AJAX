import React from 'react';

const Friends = props => {
  console.log(props);
  return (
    <div>
      {props.friendsList.map(friends => {
        console.log(friends);
        return <h3>{friends.name}</h3>;
      })}
    </div>
  );
};

export default Friends;

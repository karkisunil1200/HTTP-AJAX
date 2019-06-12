import React, {Component} from 'react';

class FriendForm extends Component {
  state = {
    name: '',
    email: '',
    age: ''
  };

  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            onChange={this.changeHandler}
            palceholder='Enter your name'
            name='name'
            value={this.state.value}
          />
        </form>
      </div>
    );
  }
}

export default FriendForm;

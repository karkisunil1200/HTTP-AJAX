import React, {Component} from 'react';
import './FriendForm.css';

class FriendForm extends Component {
  state = {
    name: '',
    email: '',
    age: ''
  };

  componentDidMount() {
    this.setState({
      name: '',
      email: '',
      age: ''
    });
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
  };

  render() {
    return (
      <div className='form-container'>
        <h2 className='title'>Add a Friend</h2>
        <form onSubmit={this.addFriend}>
          <div className='form-group'>
            <label className='label' HTMLfor='male'>
              Name:
            </label>
            <input
              type='text'
              onChange={this.changeHandler}
              placeholder='Enter your name'
              name='name'
              value={this.state.name}
              className='input-form'
            />
            <div className='form-group'>
              <label className='label' HTMLfor='male'>
                Age:
              </label>
              <input
                type='text'
                onChange={this.changeHandler}
                placeholder='Enter your age'
                name='age'
                value={this.state.age}
                className='input-form'
              />
            </div>

            <div className='form-group' />
            <label className='label' HTMLfor='male'>
              Email:
            </label>
            <input
              type='text'
              onChange={this.changeHandler}
              placeholder='Enter your email'
              name='email'
              value={this.state.email}
              className='input-form'
            />
          </div>
          <button className='btn' type='submit'>
            Add Friend
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;

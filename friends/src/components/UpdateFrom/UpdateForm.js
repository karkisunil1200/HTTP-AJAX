import React, {Component} from 'react';

class UpdateForm extends Component {
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

  updateInfo = event => {
    event.preventDefault();
    this.props.updateInfo(this.state);
    this.setState({
      name: '',
      email: '',
      age: ''
    });
  };

  render() {
    return (
      <div className='form-container'>
        <h2 className='title'>Update Information</h2>
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
            Update Information
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;

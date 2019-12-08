import React from 'react';
// import axios from 'axios';

export default class PersonInput extends React.Component {
  // state = {
  //   name: '',
  // }

  // handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();

  // }

  render() {
    const{handleChange,handleSubmit,username,email}=this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="username" value={username} onChange={handleChange} />
           
            {/* Email:
            <input type="text" name="email" value={email} onChange={handleChange} /> */}
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
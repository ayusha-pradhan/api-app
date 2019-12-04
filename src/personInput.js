import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
  // state = {
  //   name: '',
  // }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
debugger;
    const data = {name: this.props.name};

    axios.post(`https://jsonplaceholder.typicode.com/users`, {data})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.persons.concat(res.data);
                this.setState({name: this.props.name});
        // this.setState({
        //   persons:res.data
        // });
        // console.log(this.persons);
        
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name"  onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
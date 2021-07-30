import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { id } = this.props.match.params;
    const { greetingsMessage } = this.props;
    return (
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about"> About</Link>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component: id { id } </p>
      </div>
    );
  }
};

export default Users;

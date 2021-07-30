import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about"> About</Link>
        <h2>Users</h2>
        <p> My awesome Users component </p>
      </div>
    );
  }
};

export default Users;

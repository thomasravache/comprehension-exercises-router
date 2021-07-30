import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <Home /> 
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;

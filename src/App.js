import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Home /> 
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning" /> } /> {/* render é usado caso você também vá utilizar props como a greetingsMessage aí tem que usar callback */}
      </BrowserRouter>
    );
  }
}

export default App;

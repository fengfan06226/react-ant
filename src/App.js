import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Dashboard, Summary } from './views/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Dashboard}>
            <Route path="dashboard" component={Dashboard} />
            <Route path="summary" component={Summary}>
              {/* <Route path="messages/:id" component={Message} /> */}
            </Route>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;

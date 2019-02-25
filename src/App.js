import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard, Summary } from './views/index';
import Header from './commonCode/Header';
import SideBar from './commonCode/Sidebar';
import "antd/dist/antd.css";
import './App.css';

// 默认布局
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideBar />

        <Router>
          <div>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/summary" component={Summary} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

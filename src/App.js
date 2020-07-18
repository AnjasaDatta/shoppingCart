import React, { Component } from 'react';
import Products from './Components/Products/Product';
//import styles from './App.module.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='container'>
            <br />
            <Route exact path='/' component={Products} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

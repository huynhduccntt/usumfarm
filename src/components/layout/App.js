import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
        <Header></Header>
        </header>{/* #header */}



      </div>
    );
  }
}

export default App;

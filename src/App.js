import React, { Component } from 'react';
import Book from './componets/Book';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world! o/
        <Book />
      </div>
    );
  }
}

export default App;

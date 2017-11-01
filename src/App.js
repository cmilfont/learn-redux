import React, { Component } from 'react';
import Home from 'views/home';
import Attends from 'views/attends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home>
          <Attends />
        </Home>
      </div>
    );
  }
}

export default App;

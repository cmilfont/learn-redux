import React, { Component } from 'react';
import Home from 'views/home';
import Attends from 'views/attends';
import uuid from 'uuid';
import localforage from 'localforage';
import Store from 'views/milflux/store';

localforage.config({
    driver      : localforage.INDEXEDDB,
    name        : 'learnRedux',
    version     : 1.0,
    storeName   : 'learnredux',
    description : 'Learn Redux'
});
window.localforage = localforage;
window.uuid = uuid;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home>
          <Store>
            <Attends />
          </Store>
        </Home>
      </div>
    );
  }
}

export default App;

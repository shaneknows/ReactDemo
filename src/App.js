import React, { Component } from 'react';
import Head from "./layout/head";
import Game from "./js/components/game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Game />
      </div>
    );
  }
}

export default App;

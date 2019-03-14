import React, { Component } from 'react';
import About from './pages/About';

class App extends Component {
  render() {
    console.log("Window", window.location);
    return (
      <div>
        <About />
      </div>
    );
  }
}

export default App;

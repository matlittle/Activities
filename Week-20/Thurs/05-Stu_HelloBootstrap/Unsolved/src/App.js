import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <p>Render Bootstrap components here</p>
          <Btn val="Click Me!" />
        </div>
      </div>
    )
  }
};

class Btn extends Component {
  render() {
    return (
      <button className='button'>{this.props.val}</button>
    )
  }
}

export default App;

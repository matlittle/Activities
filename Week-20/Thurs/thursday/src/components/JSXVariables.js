import React, { Component } from "react";

class JSXVariables extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="jumbotron">
            <h1>Hi! My name is {this.name}</h1>
            <h2>My name has {this.name.length} letters</h2>
            <h2>I think React {this.thoughts}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default JSXVariables;

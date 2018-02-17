import React, { Component } from 'react';

class Math extends Component {
  render() {
    return ( <span>
        {this.doMath(
          this.props.num1,
          this.props.operator,
          this.props.num3)
        }
      </span>

    )
  }

  doMath(num1, op, num3) {
    switch(op) {
      case '+':
        return num1 + num3;
      case '-':
        return num1 - num3;
      case '*':
        return num1 * num3;
      case '/':
        return num1 / num3;
      default:
        return '?';
    }
  }
}

export default Math


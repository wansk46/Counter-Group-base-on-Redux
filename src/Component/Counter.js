import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  increase=() => {
    this.props.onUpdate(1)
    this.props.updateNumber(this.props.number + 1, this.props.index)
  }

  decrease=() => {
    this.props.onUpdate(-1)
    this.props.updateNumber(this.props.number - 1, this.props.index)
  }

  render() {
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <span>{this.props.number}</span>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
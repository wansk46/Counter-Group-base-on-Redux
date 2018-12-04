import React, { Component } from 'react';
import Counter from './Counter.js'
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      counter: new Array(prop.size).fill(0),
      // sum: 0,
    }
  }
  updateSum=(delta) => {
    // this.state.sum += delta;
    // this.setState(this.state)
    this.props.dispatch({
      type: "UPDATESUM",
      payload: delta
    });
  }

  onSubmitFunc = (event) => {
    event.preventDefault();
    this.setState({
      counter: new Array(Number(this.refs.inputField.value)).fill(0),
      sum: 0,
    })
  }

  updateNum = (number, index) => {
    this.state.counter[index] = number;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        {this.state.counter.map((count, index) => <Counter index={index} updateNumber={this.updateNum} number={count} onUpdate={this.updateSum}/>)}
        <form onSubmit={this.onSubmitFunc} >
            <input ref="inputField"/>
            <button type="submit"> Counter </button>
        </form>
        <span>sum: {this.props.sum}</span>
      </div>
    );
  }
}

// export default CounterGroup;
const mapStateToProps = state => ({
  sum: state.sum
});

 connect(mapStateToProps)(CounterGroup)
 export default connect(mapStateToProps)(CounterGroup);
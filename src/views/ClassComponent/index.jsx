import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('updated', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <p>{this.state.count}</p>

        <button onClick={this.increment}>+</button>

        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default CounterClass;

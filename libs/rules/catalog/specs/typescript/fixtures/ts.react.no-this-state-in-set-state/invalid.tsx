import React from 'react';

export class Counter extends React.Component {
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return null;
  }
}

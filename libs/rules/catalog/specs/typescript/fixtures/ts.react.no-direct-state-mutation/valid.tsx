import React from 'react';

export class Counter extends React.Component {
  state = { count: 0 };

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return null;
  }
}

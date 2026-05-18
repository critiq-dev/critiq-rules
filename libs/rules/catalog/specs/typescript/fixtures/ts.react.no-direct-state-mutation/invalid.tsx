import React from 'react';

export class Counter extends React.Component {
  state = { count: 0 };

  increment() {
    this.state.count += 1;
  }

  render() {
    return null;
  }
}

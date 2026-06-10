import React from 'react';

export class Counter extends React.Component {
  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return null;
  }
}

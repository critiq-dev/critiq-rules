import React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  render() {
    return null;
  }
}

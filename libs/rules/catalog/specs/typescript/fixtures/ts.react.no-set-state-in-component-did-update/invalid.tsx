import React from 'react';

export class Counter extends React.Component<{ value: number }> {
  componentDidUpdate() {
    this.setState({ value: this.props.value });
  }

  render() {
    return null;
  }
}

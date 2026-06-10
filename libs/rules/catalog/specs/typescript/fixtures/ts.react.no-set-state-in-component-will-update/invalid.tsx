import React from 'react';

export class Counter extends React.Component<{ value: number }> {
  componentWillUpdate() {
    this.setState({ value: this.props.value });
  }

  render() {
    return null;
  }
}

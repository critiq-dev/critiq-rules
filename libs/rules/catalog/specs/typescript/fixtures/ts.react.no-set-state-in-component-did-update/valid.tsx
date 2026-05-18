import React from 'react';

export class Counter extends React.Component<{ value: number }> {
  componentDidUpdate(prevProps: { value: number }) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return null;
  }
}

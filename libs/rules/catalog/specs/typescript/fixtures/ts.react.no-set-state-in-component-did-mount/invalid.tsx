import React from 'react';

export class Loader extends React.Component {
  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    return null;
  }
}

import React from 'react';

export class Loader extends React.Component {
  state = { ready: false };
  private mounted = false;

  componentDidMount() {
    this.mounted = true;
    this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return null;
  }
}

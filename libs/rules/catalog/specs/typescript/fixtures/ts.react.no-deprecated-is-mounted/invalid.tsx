import React from 'react';

export class Loader extends React.Component {
  componentDidMount() {
    if (this.isMounted()) {
      this.setState({ ready: true });
    }
  }

  render() {
    return null;
  }
}

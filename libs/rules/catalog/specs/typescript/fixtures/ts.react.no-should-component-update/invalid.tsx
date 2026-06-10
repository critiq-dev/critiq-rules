import React from 'react';

export class Profile extends React.Component<{ name: string }> {
  shouldComponentUpdate(nextProps: { name: string }) {
    return nextProps.name !== this.props.name;
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

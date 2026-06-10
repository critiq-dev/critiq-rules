import React from 'react';

export class Profile extends React.PureComponent<{ name: string }> {
  render() {
    return <div>{this.props.name}</div>;
  }
}

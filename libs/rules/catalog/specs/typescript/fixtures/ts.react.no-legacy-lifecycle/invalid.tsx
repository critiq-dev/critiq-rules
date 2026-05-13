import React from 'react';

export class LegacyProfile extends React.Component<{ userId: string }> {
  componentWillReceiveProps(nextProps: { userId: string }) {
    if (nextProps.userId !== this.props.userId) {
      void nextProps.userId;
    }
  }

  render() {
    return <section>{this.props.userId}</section>;
  }
}

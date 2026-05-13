import React from 'react';

export class ModernProfile extends React.Component<{ userId: string }> {
  componentDidUpdate(prevProps: { userId: string }) {
    if (prevProps.userId !== this.props.userId) {
      void this.props.userId;
    }
  }

  render() {
    return <section>{this.props.userId}</section>;
  }
}

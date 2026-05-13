import React from 'react';

export class LoginForm extends React.Component {
  componentDidMount() {
    this.refs.email?.focus();
  }

  render() {
    return <input ref="email" type="email" />;
  }
}

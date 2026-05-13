import React from 'react';

export class LoginForm extends React.Component {
  private emailInput: HTMLInputElement | null = null;

  componentDidMount() {
    this.emailInput?.focus();
  }

  render() {
    return <input ref={(node) => { this.emailInput = node; }} type="email" />;
  }
}

import React from 'react';

export class SearchBox extends React.Component {
  private readonly inputRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    this.inputRef.current?.scrollIntoView();
  }

  render() {
    return <input ref={this.inputRef} type="search" />;
  }
}

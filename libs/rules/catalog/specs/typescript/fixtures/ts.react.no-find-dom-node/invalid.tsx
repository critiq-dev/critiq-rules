import React from 'react';
import { findDOMNode } from 'react-dom';

export class SearchBox extends React.Component {
  componentDidMount() {
    findDOMNode(this)?.scrollIntoView();
  }

  render() {
    return <input type="search" />;
  }
}

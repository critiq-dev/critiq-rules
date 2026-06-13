import * as React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.createElement('div');

const element = React.createElement('div');
ReactDOM.render(element, container);
ReactDOM.render(element, container, () => {});

import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const testList = ['1','2','3']

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List list={testList}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

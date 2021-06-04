import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './container/Clock';
import Normalize from 'react-normalize';

ReactDOM.render(
  <>
    <Normalize />
    <Clock />
  </>,
  document.getElementById('root')
);

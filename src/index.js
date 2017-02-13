import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

require('smoothscroll-polyfill').polyfill();

window.onload = () => {
  setTimeout(() => {
    window.scroll(0,0);
    console.log('Scroll to top');
  });
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

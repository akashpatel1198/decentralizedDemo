import React from 'react';
import { render } from 'react-dom';
import './assets/styles.css';
import App from './App.jsx';

const Root = () => {
  return (
    <div>
      <App></App>
    </div>
  )
};

render(<Root/>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>,
 
  document.getElementById('root')
);

reportWebVitals();

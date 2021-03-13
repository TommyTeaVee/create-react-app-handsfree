import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Include Handsfree.js and optional styles
import Handsfree from 'handsfree'
import 'handsfree/build/lib/assets/handsfree.css'

/**
 * Setup handsfree.js
 */
window.handsfree = new Handsfree({
  hands: true,
  showDebug: true,
  // This is super important. Remember to eject the models into your public path
  // Windows: xcopy /e node_modules\handsfree\build\lib public
  // Everywhere else: cp -r node_modules/handsfree/build/lib/* public
  assetsPath: '/assets'
})

/**
 * Render App
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

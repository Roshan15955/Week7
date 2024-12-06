import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hook_ContolledButtonState from './Counter';
import EmojeeCounter from './EmojeeCounter';
import TextToEmoji from './TextToEmoji';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook_ContolledButtonState />
    <EmojeeCounter pic='Happy'/>
    <EmojeeCounter pic='Sad'/>
    <EmojeeCounter pic='Like'/>
    <TextToEmoji/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
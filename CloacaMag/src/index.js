import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

var element = React.createElement('h1',{ className: 'greeting'} , 'Hello, world!');



const root = ReactDOM.createRoot(document.getElementById('root'));

var password = "spookyspookyspooky"
if (prompt("enter password:","") === password){
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

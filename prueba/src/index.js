import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";






// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBinXg07rkxeD7iGpo17BBHgaqYR9GHs-Y",
  authDomain: "ferreteria-f983c.firebaseapp.com",
  projectId: "ferreteria-f983c",
  storageBucket: "ferreteria-f983c.appspot.com",
  messagingSenderId: "662018754235",
  appId: "1:662018754235:web:0fe1e44f2009b007558b9e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

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

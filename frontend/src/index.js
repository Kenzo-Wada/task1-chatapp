import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJd6djz5P9ukqINNFjeepRLih31T2FAWQ",
  authDomain: "task1-chatapp-7fe8d.firebaseapp.com",
  databaseURL: "https://task1-chatapp-7fe8d-default-rtdb.firebaseio.com",
  projectId: "task1-chatapp-7fe8d",
  storageBucket: "task1-chatapp-7fe8d.appspot.com",
  messagingSenderId: "933409033926",
  appId: "1:933409033926:web:c06c4c2fd6f1f5ef4e91c7",
  measurementId: "G-QG8CCTK1T2"
};

// Initialize Firebase
// const app =
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase();
console.log(db)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

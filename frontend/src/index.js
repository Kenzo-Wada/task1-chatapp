import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLifYdh2b-V9WzIK1X3cL9gRoI_q5UC24",
    authDomain: "chat-app-86125.firebaseapp.com",
    databaseURL:
        "https://chat-app-86125-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-app-86125",
    storageBucket: "chat-app-86125.appspot.com",
    messagingSenderId: "717771492231",
    appId: "1:717771492231:web:4019216ccf20fc5052e122",
    measurementId: "G-BQCX5GM9PP",
};

// Initialize Firebase
// const app =
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";



export const Context = React.createContext()
const root = ReactDOM.createRoot(document.getElementById("root"));

const provider = new GoogleAuthProvider();

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwDEZSYAUoXFRPP-oYEyJmvozI5KGe50o",
  authDomain: "chat-59a47.firebaseapp.com",
  projectId: "chat-59a47",
  storageBucket: "chat-59a47.appspot.com",
  messagingSenderId: "240495116316",
  appId: "1:240495116316:web:13a98705eee3e300ec5fd9",
  measurementId: "G-Z3ZD0GGT58"
};

const app = initializeApp(firebaseConfig);


root.render(
  <Context.Provider value={{app,provider}} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

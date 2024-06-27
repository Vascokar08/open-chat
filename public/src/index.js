import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import  { disableReactDevTools } from '@fvillers/disable-React-DevTools';

if (process.env.NODE_ENV === 'production') disableReactDevTools()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

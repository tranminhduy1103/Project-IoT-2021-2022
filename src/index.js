import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import React, { Component }  from 'react';
import { Provider } from 'react-redux'
import store from "./redux/store"
import { createRoot } from "react-dom/client";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
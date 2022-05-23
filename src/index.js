import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import React, { Component }  from 'react';
import { Provider } from 'react-redux'
import store from "./redux/store"


ReactDOM.render(<App/>, document.querySelector('#root'))
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//静态资源文件
import "./assets/css/reset.css"
import "./assets/js/rem"
//路由模式 
import { HashRouter } from "react-router-dom"
//antd-mobile模板
import 'antd-mobile/dist/antd-mobile.css';
//状态层
import { Provider } from "react-redux"
import store from "./store"

Component.prototype.$img = "http://localhost:3000"
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

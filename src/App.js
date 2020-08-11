import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
//懒加载
import Load from "./util/Load"
import RouteGuard from "./util/RouteGuard"

const Login = Load(() => import("./pages/Login/Login"))
const Register = Load(() => import("./pages/Register/Register"))
const Index = Load(() => import("./pages/Index/Index"))
const ProDetail = Load(() => import("./pages/ProDetail/ProDetail"))

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <RouteGuard path="/index" component={Index}></RouteGuard>
      <RouteGuard path="/proDetail" component={ProDetail}></RouteGuard>
      <Redirect to="/login"></Redirect>
    </Switch>
  );
}

export default App;

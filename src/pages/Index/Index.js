import React, { Component } from 'react'
import { Switch, Redirect, NavLink } from "react-router-dom"
import Load from "../../util/Load"
import "./Index.css"
import RouteGuard from "../../util/RouteGuard"
const Home = Load(() => import("../Home/Home"))
const ProList = Load(() => import("../ProList/ProList"))
const ProInfo = Load(() => import("../ProInfo/ProInfo"))
const Cart = Load(() => import("../Cart/Cart"))
const Mine = Load(() => import("../Mine/Mine"))
export default class Index extends Component {
    render() {
        return (
            <div className="index">
                <Switch>
                    <RouteGuard path="/index/home" component={Home}></RouteGuard>
                    <RouteGuard path="/index/proList" component={ProList}></RouteGuard>
                    <RouteGuard path="/index/proInfo" component={ProInfo}></RouteGuard>
                    <RouteGuard path="/index/cart" component={Cart}></RouteGuard>
                    <RouteGuard path="/index/mine" component={Mine}></RouteGuard>
                    <Redirect to="/index/home"></Redirect>
                </Switch>
                <footer>
                    <div>
                        <NavLink to="/index/home" activeClassName="active">
                            <i className="home"></i>
                            <p>首页</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/proList" activeClassName="active">
                            <i className="list"></i>
                            <p>分类</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/cart" activeClassName="active">
                            <i className="index-cart"></i>
                            <p>购物车</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/index/mine" activeClassName="active">
                            <i className="mine"></i>
                            <p>我的</p>
                        </NavLink>
                    </div>
                </footer>
            </div>
        )
    }
}

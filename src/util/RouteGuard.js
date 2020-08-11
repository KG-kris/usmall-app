import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"
export default class RouteGuard extends Component {
    render() {
        const uid = sessionStorage.getItem("uid")
        return (
            // 判断用户名
            <div>
                {uid ? <Route {...this.props}></Route> : <Redirect to="/login"></Redirect>}
            </div>
        )
    }
}
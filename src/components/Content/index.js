import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        )
    }
}

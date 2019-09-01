import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'

export default class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route render={() => <div>page not found</div>}/>
        </Switch>
      </div>
    )
  }
}

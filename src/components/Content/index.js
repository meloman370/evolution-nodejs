import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import ContentStyled from './style'

export default class Content extends Component {
  render() {
    return (
      <ContentStyled>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route render={() => <div>page not found</div>}/>
        </Switch>
      </ContentStyled>
    )
  }
}

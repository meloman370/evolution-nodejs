import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import CategoryPage from '../../pages/Category'
import ContentStyled from './style'

export default class Content extends Component {
  render() {
    return (
      <ContentStyled>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:menu/:category" component={CategoryPage}/>
          <Route render={() => <div>page not found</div>}/>
        </Switch>
      </ContentStyled>
    )
  }
}

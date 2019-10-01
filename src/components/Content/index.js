import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import CategoryPage from '../../pages/Category'
import ProductPage from '../../pages/Product'
import ProfilePage from '../../pages/Profile'
import ContentStyled from './style'

export default class Content extends Component {
  render() {
    return (
      <ContentStyled>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/product/:product_id" component={ProductPage}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/*" component={CategoryPage}/>
          <Route render={() => <div>page not found</div>}/>
        </Switch>
      </ContentStyled>
    )
  }
}

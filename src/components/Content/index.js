import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import CategoryPage from '../../pages/Category'
import ProductPage from '../../pages/Product'
import ContentStyled from './style'

export default class Content extends Component {
  render() {
    return (
      <ContentStyled>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:menu/:category" exact component={CategoryPage}/>
          <Route path="/:menu/:category/:product_id" component={ProductPage}/>
          <Route render={() => <div>page not found</div>}/>
        </Switch>
      </ContentStyled>
    )
  }
}

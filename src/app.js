import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchMenuIfNeeded } from './redux/actions/menu'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return(
      <>
        <Header/>
        <Content/>
        <Footer/>
      </>
    )
  }
}


import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from './redux/actions'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


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
 
function mapStateToProps(state) {
  const { isFetching, apps } = state
 
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(App)

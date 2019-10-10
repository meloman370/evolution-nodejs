import React, { PureComponent } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {userIsLoggedIn} from '../helpers/user-helper'
import Container from '../styles/Container'
import Row from '../styles/Row'
import {fetchProfile} from '../redux/actions/profile'
import Profile from '../components/Content/components/Profile'

class ProfilePage extends PureComponent {
  
  componentDidMount() {
    const {history, dispatch} = this.props
    if (userIsLoggedIn()) {
      dispatch(fetchProfile())
    } else {
      history.push('/')
    }
  }
  
  render() {
    const {profile} = this.props
    return (
      <Container>
        <Row>
          {profile.role &&
            <Profile role={profile.role}/>
          }
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.info
  }
}
 
export default connect(mapStateToProps)(
  withRouter(ProfilePage)
)

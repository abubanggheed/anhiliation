import React, { Component } from 'react'
import HomeComponent from './home.component'
import { connect } from 'react-redux'

class HomeContainer extends Component {

  render() {
    return <>
      <HomeComponent />
    </>
  }
}

export default connect()(HomeContainer)

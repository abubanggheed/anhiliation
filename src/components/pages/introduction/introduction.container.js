import React, { Component } from 'react'
import IntroductionComponent from './introduction.component'
import { connect } from 'react-redux'

class IntroductionContainer extends Component {

  render() {
    return <>
      <IntroductionComponent />
    </>
  }
}

export default connect()(IntroductionContainer)

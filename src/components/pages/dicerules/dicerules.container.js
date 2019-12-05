import React, { Component } from 'react'
import DiceComponent from './dicerules.component'
import { connect } from 'react-redux'

class DiceContainer extends Component {

  render() {
    return <>
      <DiceComponent />
    </>
  }
}

export default connect()(DiceContainer)

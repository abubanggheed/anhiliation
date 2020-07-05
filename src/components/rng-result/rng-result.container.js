import React from 'react'
import { connect } from 'react-redux'
import RngResultComponent from './rng-result.component'

const RngResult = props => {


  return <RngResultComponent
    result={props.result}
  />
}

export default connect(({ diceReducer }) => ({
  result: diceReducer.history.rng
}))(RngResult)

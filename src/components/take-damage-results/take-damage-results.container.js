import React from 'react'
import TakeDamageResultComponent from './take-damage-results.component'
import { connect } from 'react-redux'

const TakeDamageResult = props => {

  return <TakeDamageResultComponent
    result={props.result}
  />
}

export default connect(({ diceReducer }) => ({
  result: diceReducer.history.takeDamage
}))(TakeDamageResult)

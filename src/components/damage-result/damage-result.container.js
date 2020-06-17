import React from 'react'
import DamageResultComponent from './damage-result.component'
import { connect } from 'react-redux'

const DamageResult = props => {

  return <DamageResultComponent
    result={props.result}
  />
}

export default connect(({ diceReducer }) => ({
  result: diceReducer.history.damage
}))(DamageResult)

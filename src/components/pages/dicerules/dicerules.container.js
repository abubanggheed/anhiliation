import React from 'react'
import DiceComponent from './dicerules.component'
import { connect } from 'react-redux'

const DiceContainer = props => {
    return <>
      <DiceComponent
        pars={props.paragraphs}
        dispatch={props.dispatch}
      />
    </>
}

export default connect(({ rulesParReducer }) => ({
  paragraphs: rulesParReducer.diceRules
}))(DiceContainer)

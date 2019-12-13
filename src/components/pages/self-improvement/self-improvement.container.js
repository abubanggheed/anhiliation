
import React from 'react'
import SIComponent from './self-improvement.component'
import { connect } from 'react-redux'

const SIContainer = props => {

  const changePar = par => () => {
    props.dispatch({
      type: 'RULES_IMPROVEMENT',
      payload: par
    })
  }

  return <>
    <SIComponent
      pars={props.paragraphs}
      toggleParagraph={changePar}   
    />
  </>
}

export default connect(({ rulesParReducer }) => ({
  paragraphs: rulesParReducer.selfImprovement
}))(SIContainer)

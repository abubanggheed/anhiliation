import React from 'react'
import { connect } from 'react-redux'
import PossessionsComponent from './possessions.component'

const PossessionsPage = props => {

  const changePar = par => () => {
    props.dispatch({
      type: 'RULES_POSSESSIONS',
      payload: par
    })
  }

  return <>
    <PossessionsComponent
      pars={props.paragraphs}
      toggleParagraph={changePar}
    />
  </>
}

export default connect(({ rulesParReducer}) => ({
  paragraphs: rulesParReducer.possessions
}))(PossessionsPage)

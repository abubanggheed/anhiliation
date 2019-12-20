import React from 'react'
import { connect } from 'react-redux'
import ViolenceComponent from './violence.component'
import { combatActions } from '../../../data/tests/actions'
import { grappleActions } from '../../../data/tests/grappling'
import { moshActions } from '../../../data/tests/moshing'

const ViolencePage = props => {

  const changePar = par => () => {
    props.dispatch({
      type: 'RULES_VIOLENCE',
      payload: par
    })
  }

  return <>
    <ViolenceComponent
      pars={props.paragraphs}
      toggleParagraph={changePar}
      combat={combatActions}
      grappling={grappleActions}
      moshing={moshActions}
    />
  </>
}

export default connect(
  ({ rulesParReducer }) => ({ paragraphs: rulesParReducer.violence })
)(ViolencePage)

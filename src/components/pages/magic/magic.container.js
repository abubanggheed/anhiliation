import React from 'react'
import { connect } from 'react-redux'
import MagicComponent from './magic.component'

const MagicPage = props => {

  const changePar = par => () => {
    props.dispatch({
      type: 'RULES_MAGIC',
      payload: par
    })
  }

  return <>
    <MagicComponent
      pars={props.paragraphs}
      toggleParagraph={changePar}
    />
  </>
}

export default connect(
  ({ rulesParReducer }) => ({ paragraphs: rulesParReducer.magic })
)(MagicPage)

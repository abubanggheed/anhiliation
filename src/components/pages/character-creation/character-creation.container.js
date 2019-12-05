import React from 'react'
import CharacterComponent from './character-creation.component'
import { connect } from 'react-redux'

const CharacterCreation = props => {

  return <>
    <CharacterComponent
      pars={props.paragraphs}
      dispatch={props.dispatch}
    />
  </>
}

export default connect(({ rulesParReducer }) => ({
  paragraphs: rulesParReducer.charCreation
}))(CharacterCreation)

import React from 'react'
import { connect } from 'react-redux'
import InputComponent from './stat-input.component'
import { characteristics } from '../../../data/characteristic'

const StatInput = props => {

  const changeStat = statName => event => {
    props.dispatch({
      type: 'CHANGE_STAT',
      stat: statName,
      payload: event.target.value
    })
  }

  return <>
    <InputComponent
      stats={props.stats}
      charList={characteristics}
      changeStat={changeStat}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  stats: statsReducer
}))(StatInput)

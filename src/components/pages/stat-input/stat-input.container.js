import React from 'react'
import { connect } from 'react-redux'
import InputComponent from './stat-input.component'
import { characteristics } from '../../../data/characteristic'
import { aptitudes } from '../../../data/aptitude'

const StatInput = props => {

  const changeStat = statName => event => {
    props.dispatch({
      type: 'CHANGE_STAT',
      stat: statName,
      payload: event.target.value
    })
  }

  const changeApt = (aptName, charType) => event => {
    props.dispatch({
      type: 'CHANGE_APT',
      apt: aptName,
      charType
    })
  }

  return <>
    <InputComponent
      stats={props.stats.stats}
      apts={props.stats.aptitudes}
      numberc={props.stats.numberc}
      numbernc={props.stats.numbernc}
      charList={characteristics}
      aptList={aptitudes}
      changeStat={changeStat}
      changeApt={changeApt}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  stats: statsReducer
}))(StatInput)

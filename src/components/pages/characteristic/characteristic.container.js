import React from 'react'
import { connect } from 'react-redux'
import CharComponent from './characteristic.component'
import { tests } from '../../../data/test'

const Dice = props => {

  return <>
    <CharComponent
      stats={props.stats}
      tests={tests}
    />
  </>
}


export default connect(({ statsReducer }) => ({
  stats: statsReducer
}))(Dice)

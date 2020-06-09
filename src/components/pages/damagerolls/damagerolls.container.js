import React from 'react'
import { connect } from 'react-redux'
import DamageComponent from './damagerolls.component'

const Damagerolls = props => {

  return <>
    <DamageComponent
      stats={props.stats}
    />
  </>
}


export default connect(({ statsReducer }) => ({
  stats: statsReducer
}))(Damagerolls)

import React from 'react'
import { connect } from 'react-redux'
import RNGComponent from './rng.component'

const Rng = props => {

  return <>
    <RNGComponent
    />
  </>
}


export default connect()(Rng)

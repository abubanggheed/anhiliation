import React from 'react'
import { connect } from 'react-redux'
import TakeDamageComponent from './take-damage.component'
import { takeDamage } from '../../../util/take-damage'
import { genRandom } from '../../../util/gen-random'

const TakeDamage = props => {

  const changeByValue = key => event => {
    props.dispatch({
      type: 'SET_TITEM',
      source: 'takeDamage',
      key,
      payload: event.target.value
    })
  }

  const changeAdv = (key, min = 0) => event => {
    let val = event.target.value
    if (val < min) val = min
    props.dispatch({
      type: 'SET_TITEM',
      source: 'takeDamage',
      key,
      payload: val
    })
  }

  const calculate = () => {
    let { damage, pen, hits,  abs, charges,  deflection } = props.values
    let result = takeDamage(damage, pen, hits, abs, charges,  deflection)
    props.dispatch({
      type: 'SET_RESULT',
      source: 'takeDamage',
      payload: result
    })
  }

  const save = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'history',
      list: 'saved',
      payload: {
        type: 'takeDamage',
        values: { ...props.values },
        color: `rgb(${genRandom(255)}, ${genRandom(255)}, ${genRandom(255)})`
      }
    })
  }

  return <>
    <TakeDamageComponent
      values={props.values}
      changeByValue={changeByValue}
      changeAdv={changeAdv}
      calculate={calculate}
      save={save}
    />
  </>
}

export default connect(({ diceReducer }) => ({
  values: diceReducer.takeDamage
}))(TakeDamage)

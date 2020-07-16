import React from 'react'
import { connect } from 'react-redux'
import RNGComponent from './rng.component'
import { rollRng } from '../../../util/rng-roll'
import { genRandom } from '../../../util/gen-random'

const Rng = props => {

  const rollDice = () => {
    let { dice, offset, numberOfRolls } = props.values
    let result = rollRng(dice, offset, numberOfRolls)
    props.dispatch({
      type: 'SET_RESULT',
      source: 'rng',
      payload: result
    })
  }

  const changeByValue = key => event => {
    props.dispatch({
      type: 'SET_TITEM',
      source: 'rng',
      key,
      payload: event.target.value
    })
  }

  const changeAdv = (key, min = 0) => event => {
    let val = event.target.value
    if (val < min) val = min
    props.dispatch({
      type: 'SET_TITEM',
      source: 'rng',
      key,
      payload: val
    });
  };
  
  const addRngDie = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'rng',
      list: 'dice',
      payload: {
        max: '100',
        number: '1'
      }
    })
  }

  const removeItem = (list, index) => () => {
    props.dispatch({
      type: 'REMOVE_FROM_LIST',
      source: 'rng',
      list,
      index
    })
  }

  const changeListValue = (list, index, key, min) => event => {
    let value = event.target.value
    props.dispatch({
      type: 'SET_KEY_IN_LIST',
      source: 'rng',
      list,
      index,
      key,
      payload: (min !== undefined && value < min) ? min : value
    })
  }

  const save = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'history',
      list: 'saved',
      payload: {
        type: 'rng',
        values: { ...props.values },
        color: `rgb(${genRandom(255)}, ${genRandom(255)}, ${genRandom(255)})`
      }
    });
  }

  return <>
    <RNGComponent
      values={props.values}
      changeByValue={changeByValue}
      changeAdv={changeAdv}
      addRngDie={addRngDie}
      removeItem={removeItem}
      changeListValue={changeListValue}
      rollDice={rollDice}
      save={save}
    />
  </>
}


export default connect(({ diceReducer }) => ({
  values: diceReducer.rng
}))(Rng)

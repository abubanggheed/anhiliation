import React from 'react'
import { connect } from 'react-redux'
import DamageComponent from './damagerolls.component'
import { characteristics } from '../../../data/characteristic'
import { damageRoll } from '../../../util/damage-roll'
import { genRandom } from '../../../util/gen-random'

const Damagerolls = props => {

  const rollDice = () => {
    let { dice, atts, basic, pen, numberOfRolls } = props.values
    let attScores = atts.map(att => (
      Math.floor(props.stats[characteristics[att.charInd].name] * att.weight)
    ))
    let result = damageRoll(dice, attScores, basic, pen, numberOfRolls)
    props.dispatch({
      type: 'SET_RESULT',
      source: 'damage',
      payload: result
    })
  }

  const changeByValue = key => event => {
    props.dispatch({
      type: 'SET_TITEM',
      source: 'damage',
      key,
      payload: event.target.value
    })
  }

  const changeAdv = (key, min = 0) => event => {
    let val = event.target.value
    if (val < min) val = min
    props.dispatch({
      type: 'SET_TITEM',
      source: 'damage',
      key,
      payload: val
    });
  };

  const addModifier = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'damage',
      list: 'atts',
      payload: {
        charInd: 1,
        weight: '0.5'
      }
    })
  }

  const addDmgDie = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'damage',
      list: 'dice',
      payload: {
        max: '10',
        number: '1'
      }
    })
  }

  const removeItem = (list, index) => () => {
    props.dispatch({
      type: 'REMOVE_FROM_LIST',
      source: 'damage',
      list,
      index
    })
  }

  const changeListValue = (list, index, key, min) => event => {
    let value = event.target.value
    props.dispatch({
      type: 'SET_KEY_IN_LIST',
      source: 'damage',
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
        type: 'damage',
        values: { ...props.values },
        color: `rgb(${genRandom(255)}, ${genRandom(255)}, ${genRandom(255)})`
      }
    });
  }

  return <>
    <DamageComponent
      chars={characteristics}
      values={props.values}
      rollDice={rollDice}
      changeByValue={changeByValue}
      changeAdv={changeAdv}
      addModifier={addModifier}
      addDmgDie={addDmgDie}
      removeItem={removeItem}
      changeListValue={changeListValue}
      save={save}
    />
  </>
}


export default connect(({ statsReducer, diceReducer }) => ({
  stats: statsReducer.stats,
  values: diceReducer.damage
}))(Damagerolls)

import React from 'react'
import { connect } from 'react-redux'
import CharComponent from './characteristic.component'
import { tests } from '../../../data/test'
import { characteristics } from '../../../data/characteristic'
import { characteristicTest } from '../../../util/characteristic-test'
import { genRandom } from '../../../util/gen-random'

const Dice = props => {
  const changeByValue = key => event => {
    props.dispatch({
      type: 'SET_TITEM',
      source: 'characteristic',
      key,
      payload: event.target.value
    })
  }

  const changeAdv = (key, min = 0) => event => {
    let val = event.target.value
    if (val < min) val = min
    props.dispatch({
      type: 'SET_TITEM',
      source: 'characteristic',
      key,
      payload: val
    });
  }

  const save = () => {
    props.dispatch({
      type: 'ADD_TO_LIST',
      source: 'history',
      list: 'saved',
      payload: {
        type: 'characteristic',
        values: { ...props.values },
        color: `rgb(${genRandom(255)}, ${genRandom(255)}, ${genRandom(255)})`
      }
    });
  }

  const makeRoll = () => {
    let { diffInd, variance, charInd, basic, advantages, disadvantages, centerings,
      charMultiplier, fatMultiplier, numberOfRolls } = props.values
    let charValue = props.stats[characteristics[charInd].name]
    let fatige = [
      'Accuracy', 'Strength', 'Endurance', 'Reflexes'
    ].includes(characteristics[charInd].name) ?
      props.stats.physFatigue : props.stats.menFatigue
    let rollResult = characteristicTest(tests[diffInd], variance,
      charValue, basic, advantages, disadvantages, centerings,
      charMultiplier, fatMultiplier, fatige, numberOfRolls, characteristics[charInd].name
    )
    props.dispatch({
      type: 'SET_RESULT',
      source: 'characteristic',
      payload: rollResult
    })
  }

  return <>
    <CharComponent
      chars={characteristics}
      tests={tests}
      values={props.values}
      changeByValue={changeByValue}
      changeAdv={changeAdv}
      makeRoll={makeRoll}
      save={save}
    />
  </>
}


export default connect(({ statsReducer, diceReducer }) => ({
  values: diceReducer.characteristic,
  stats: statsReducer.stats
}))(Dice)

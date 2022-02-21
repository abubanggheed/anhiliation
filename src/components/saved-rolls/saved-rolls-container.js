import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SavedRollsComponent from './saved-rolls-component'

const SavedRolls = props => {

  const applySaved = item => () => {
    props.dispatch({
      type: 'SET_ALL',
      source: item.type,
      payload: item.values
    })
    props.history.push({
      characteristic: '/dice',
      damage: '/dice/damage',
      rng: '/dice/rng',
      takeDamage: '/dice/takedamage'
    }[item.type])
  }

  const removeItem = index => event => {
    event.stopPropagation()
    props.dispatch({
      type: 'REMOVE_FROM_LIST',
      source: 'history',
      list: 'saved',
      index
    });
  }

  return <SavedRollsComponent
  saved={props.saved}
  applySaved={applySaved}
  removeItem={removeItem}
  />
}

export default connect(({ diceReducer }) => ({
  saved: diceReducer.history.saved
}))(withRouter(SavedRolls))

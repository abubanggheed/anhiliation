import React from 'react'
import { connect } from 'react-redux'
import CombatTableComponent from './combat-table.component'

const CombatTable = props => {

  const setDesc = action => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'combat',
      payload: action
    })
  }

  return <>
    <CombatTableComponent
      actions={props.actions}
      setDesc={setDesc}
    />
  </>
}

export default connect()(CombatTable)

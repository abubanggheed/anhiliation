import React from 'react'
import { connect } from 'react-redux'
import MoshingTableComponent from './moshing-table.component'

const MoshingTable = props => {

  const setDesc = action => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'moshing',
      payload: action
    })
  }

  return <>
    <MoshingTableComponent
      actions={props.actions}
      setDesc={setDesc}
    />
  </>
}

export default connect()(MoshingTable)

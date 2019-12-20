import React from 'react'
import { connect } from 'react-redux'
import GrapplingTableComponent from './grappling-table.component'

const GrapplingTable = props => {

  const setDesc = action => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'grappling',
      payload: action
    })
  }

  return <>
    <GrapplingTableComponent
      actions={props.actions}
      setDesc={setDesc}
    />
  </>
}

export default connect()(GrapplingTable)

import React from 'react'
import RankTableComponent from './rank-table.component'
import { connect } from 'react-redux'

const RankTable = props => {

  const setDesc = (asset, assetType) => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: assetType,
      payload: asset
    })
  }

  return <>
    <RankTableComponent
      rank={props.rank}
      setDesc={setDesc}
    />
  </>
}

export default connect()(RankTable)

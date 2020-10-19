import React from 'react'
import RankTableComponent from './rank-table.component'
import { connect } from 'react-redux'
import { talentCosts } from '../../data/all-talents'
import { skillCosts } from '../../data/skill'

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
      talentCosts={talentCosts}
      skillCosts={skillCosts}
      apts={props.aptitudes}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(RankTable)

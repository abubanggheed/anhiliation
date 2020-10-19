import React from 'react'
import { connect } from 'react-redux'
import AssetDescComponent from './asset-desc.component'
import { talentCosts } from '../../data/all-talents'
import { skillCosts } from '../../data/skill'

const AssetDesc = props => {

  return <>
    <AssetDescComponent
      type={props.type}
      asset={props.asset}
      talentCosts={talentCosts}
      skillCosts={skillCosts}
      apts={props.aptitudes}
    />
  </>
}

export default connect(
  ({ rulesAssetDesc, statsReducer }) => ({
    type: rulesAssetDesc.assetType,
    asset: rulesAssetDesc.asset,
    aptitudes: statsReducer.aptitudes
  })
)(AssetDesc)

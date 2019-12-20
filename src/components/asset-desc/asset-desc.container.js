import React from 'react'
import { connect } from 'react-redux'
import AssetDescComponent from './asset-desc.component'

const AssetDesc = props => {

  return <>
    <AssetDescComponent
      type={props.type}
      asset={props.asset}
    />
  </>
}

export default connect(
  ({ rulesAssetDesc }) => ({ type: rulesAssetDesc.assetType, asset: rulesAssetDesc.asset })
)(AssetDesc)

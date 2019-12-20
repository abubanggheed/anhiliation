import React from 'react'
import TalentTable from '../talent-table.component'
import { tier1Talents } from '../../../data/tier1-talents'
import { connect } from 'react-redux'

const Tier1Table = props => {

  const setDesc = talent => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'talent',
      payload: talent
    })
  }

  return <>
    <TalentTable
      talents={tier1Talents}
      setDesc={setDesc}
    />
  </>
}

export default connect()(Tier1Table)

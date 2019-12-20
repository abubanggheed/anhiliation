import React from 'react'
import TalentTable from '../talent-table.component'
import { tier2Talents } from '../../../data/tier2-talents'
import { connect } from 'react-redux'

const Tier2Table = props => {

  const setDesc = talent => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'talent',
      payload: talent
    })
  }

  return <>
    <TalentTable
      talents={tier2Talents}
      setDesc={setDesc}
    />
  </>
}

export default connect()(Tier2Table)

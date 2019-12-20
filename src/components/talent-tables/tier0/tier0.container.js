import React from 'react'
import TalentTable from '../talent-table.component'
import { tier0Talents } from '../../../data/tier0-talents'
import { connect } from 'react-redux'

const Tier0Table = props => {

  const setDesc = talent => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'talent',
      payload: talent
    })
  }

  return <>
    <TalentTable
      talents={tier0Talents}
      setDesc={setDesc}
    />
  </>
}

export default connect()(Tier0Table)

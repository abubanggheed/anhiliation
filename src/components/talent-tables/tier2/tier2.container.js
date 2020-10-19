import React from 'react'
import TalentTable from '../talent-table.component'
import { tier2Talents, tier2Costs } from '../../../data/tier2-talents'
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
      apts={props.aptitudes}
      costs={tier2Costs}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(Tier2Table)

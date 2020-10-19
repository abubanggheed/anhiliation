import React from 'react'
import TalentTable from '../talent-table.component'
import { tier1Talents, tier1Costs } from '../../../data/tier1-talents'
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
      apts={props.aptitudes}
      costs={tier1Costs}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(Tier1Table)

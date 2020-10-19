import React from 'react'
import TalentTable from '../talent-table.component'
import { tier3Talents, tier3Costs } from '../../../data/tier3-talents'
import { connect } from 'react-redux'

const Tier3Table = props => {

  const setDesc = talent => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'talent',
      payload: talent
    })
  }

  return <>
    <TalentTable
      talents={tier3Talents}
      setDesc={setDesc}
      apts={props.aptitudes}
      costs={tier3Costs}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(Tier3Table)

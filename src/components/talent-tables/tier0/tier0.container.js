import React from 'react'
import TalentTable from '../talent-table.component'
import { tier0Talents, tier0Costs } from '../../../data/tier0-talents'
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
      apts={props.aptitudes}
      costs={tier0Costs}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(Tier0Table)

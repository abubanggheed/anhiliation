
import React from 'react'
import { connect } from 'react-redux'
import SkillComponent from './skill-table.component'
import { skills } from '../../data/skill'

const SkillContainer = props => {

  const setDesc = skill => () => {
    props.dispatch({
      type: 'SET_ASSET_DESC',
      assetType: 'skill',
      payload: skill
    })
  }

  return <>
    <SkillComponent
      skills={skills}
      setDesc={setDesc}
    />
  </>
}

export default connect()(SkillContainer)

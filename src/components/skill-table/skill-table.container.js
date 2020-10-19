
import React from 'react'
import { connect } from 'react-redux'
import SkillComponent from './skill-table.component'
import { skills, skillCosts } from '../../data/skill'

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
      apts={props.aptitudes}
      costs={skillCosts}
    />
  </>
}

export default connect(({ statsReducer }) => ({
  aptitudes: statsReducer.aptitudes
}))(SkillContainer)

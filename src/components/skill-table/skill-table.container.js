
import React from 'react'
import SkillComponent from './skill-table.component'
import { skills } from '../../data/skill'

const SkillContainer = props => {

  return <>
    <SkillComponent
      skills={skills}
    />
  </>
}

export default SkillContainer

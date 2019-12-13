import React from 'react'
import TalentTable from '../talent-table.component'
import { tier0Talents } from '../../../data/tier0-talents'
import { connect } from 'react-redux'

const Tier0Table = props => {

  return <>
    <TalentTable
      talents={tier0Talents}
    />
  </>
}

export default connect((redux) => ({
}))(Tier0Table)

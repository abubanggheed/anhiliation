import React from 'react'
import TalentTable from '../talent-table.component'
import { tier1Talents } from '../../../data/tier1-talents'
import { connect } from 'react-redux'

const Tier1Table = props => {

  return <>
    <TalentTable
      talents={tier1Talents}
    />
  </>
}

export default connect((redux) => ({
}))(Tier1Table)

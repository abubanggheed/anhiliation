import React from 'react'
import TalentTable from '../talent-table.component'
import { tier2Talents } from '../../../data/tier2-talents'
import { connect } from 'react-redux'

const Tier2Table = props => {

  return <>
    <TalentTable
      talents={tier2Talents}
    />
  </>
}

export default connect((redux) => ({
}))(Tier2Table)

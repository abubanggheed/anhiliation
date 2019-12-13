import React from 'react'
import TalentTable from '../talent-table.component'
import { tier3Talents } from '../../../data/tier3-talents'
import { connect } from 'react-redux'

const Tier3Table = props => {

  return <>
    <TalentTable
      talents={tier3Talents}
    />
  </>
}

export default connect((redux) => ({
}))(Tier3Table)

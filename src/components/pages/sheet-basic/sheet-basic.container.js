import React from 'react'
import { connect } from 'react-redux'
import SheetBasicComponent from './sheet-basic.component'
import { species } from '../../../data/species'

const SheetBasic = props => {

  const editBasicValue = key => event => {
    props.dispatch({
      type: 'SHEET_BASIC_SET',
      key,
      payload: event.target.value
    })
  }

  return <SheetBasicComponent
    basic={props.basic}
    editBasicValue={editBasicValue}
    species={species}
  />
}

export default connect(({ sheetBasicReducer }) => ({
  basic: sheetBasicReducer
}))(SheetBasic)

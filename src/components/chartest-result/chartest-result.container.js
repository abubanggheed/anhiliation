import React from 'react'
import { connect } from 'react-redux'
import ResultComponent from './chartest-result.component'

const ChartestResult = props => {

  return <>
    <ResultComponent
      result={props.result}
    />
  </>
}

export default connect(({ diceReducer }) => ({
  result: diceReducer.history.characteristic
}))(ChartestResult)

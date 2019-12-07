import React from 'react'
import { Table } from 'reactstrap'
import { tests } from '../../data/test'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Variance VS Difficulty</th>
          <th>High</th>
          <th>Standard</th>
          <th>Low</th>
        </tr>
      </thead>
      <tbody>
        {tests.map(test => <tr key={test.name}>
          <td><b>{test.name}</b></td>
          <td>{test.difficulty.hDescr}</td>
          <td>{test.difficulty.sDescr}</td>
          <td>{test.difficulty.lDescr}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

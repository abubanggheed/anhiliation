import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Action/Reaction</th>
          <th>Timing</th>
          <th>Type</th>
          <th>Char</th>
          <th>Difficulty</th>
          <th>Variance</th>
          <th>Talent</th>
        </tr>
      </thead>
      <tbody>
        {props.actions.map(action => <tr key={action.name}>
          <td>{action.name}</td>
          <td>{action.timing}</td>
          <td>{action.type}</td>
          <td>{action.char ? action.char.abvr : '-'}</td>
          <td>{action.difficulty}</td>
          <td>{action.variance}</td>
          <td>{action.talentRequired ? 'Yes' : 'No'}</td>
        </tr>)}
      </tbody>
    </Table>
  </>

}

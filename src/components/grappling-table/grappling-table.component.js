import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Action</th>
          <th>Char</th>
          <th>Role</th>
          <th>Difficulty</th>
          <th>Opponent Difficulty</th>
          <th>Variance</th>
        </tr>
      </thead>
      <tbody>
        {props.actions.map(action => <tr key={action.name} onClick={props.setDesc(action)}
          className="clickable"
        >
          <td>{action.name}</td>
          <td>{action.char ? action.char.abvr : '-'}</td>
          <td>{action.role}</td>
          <td>{action.diff}</td>
          <td>{action.opDiff}</td>
          <td>{action.variance}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

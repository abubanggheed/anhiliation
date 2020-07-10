import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Action</th>
          <th>Char</th>
          <th>Min Ratio</th>
          <th>1 - 4</th>
          <th>1 - 2</th>
          <th>1 - 1</th>
          <th>2 - 1</th>
          <th>4 - 1</th>
          <th>Variance</th>
        </tr>
      </thead>
      <tbody>
        {props.actions.map(action => <tr key={action.name} onClick={props.setDesc(action)}
          className="clickable"
        >
          <td>{action.name}</td>
          <td>{action.char ? action.char.abvr : '-'}</td>
          <td>{action.minRatio}</td>
          <td>{action.diff1}</td>
          <td>{action.diff2}</td>
          <td>{action.diff3}</td>
          <td>{action.diff4}</td>
          <td>{action.diff5}</td>
          <td>{action.variance}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

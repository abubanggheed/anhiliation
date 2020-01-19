import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Name</th>
          <th>Aptitudes</th>
          <th>Prerequisites</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.talents.map(talent => <tr key={talent.name} onClick={props.setDesc(talent)}>
          <td>{talent.name}</td>
          <td>{talent.printApts()}</td>
          <td>{talent.printPrereqs()}</td>
          <td>{talent.desc}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

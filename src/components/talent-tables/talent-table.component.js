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
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {[...props.talents].sort((a, b) => (a.name < b.name ? -1 : 1)).map(talent => <tr key={talent.name}
          onClick={props.setDesc(talent)}
          className="clickable"
        >
          <td>{talent.name}</td>
          <td>{talent.printApts()}</td>
          <td>{talent.printPrereqs()}</td>
          <td>{talent.desc}</td>
          <td>{props.costs[talent.apts.reduce((aptCount, apt) => (
            aptCount + (props.apts[apt.name] ? 1 : 0)
          ), 0)]}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

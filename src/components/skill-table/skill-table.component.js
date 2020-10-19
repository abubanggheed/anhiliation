
import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Skill Name</th><th>Aptitudes</th><th>Type</th><th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {[...props.skills].sort((a, b) => (a.name < b.name ? -1 : 1)).map(skill => <tr key={skill.name}
          onClick={props.setDesc(skill)}
          className="clickable"
        >
          <td>{skill.name}</td><td>{skill.printApts()}</td><td>{skill.type}</td>
          <td>{props.costs[skill.apts.reduce((aptCount, apt) => (
            aptCount + (props.apts[apt.name] ? 1 : 0)
          ), 0)]}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

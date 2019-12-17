
import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Skill Name</th><th>Aptitudes</th><th>Type</th>
        </tr>
      </thead>
      <tbody>
        {props.skills.map(skill => <tr key={skill.name}>
          <td>{skill.name}</td><td>{skill.printApts()}</td><td>{skill.type}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}
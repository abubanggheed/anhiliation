
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
        {[...props.skills].sort((a, b) => (a.name < b.name ? -1 : 1)).map(skill => <tr key={skill.name} onClick={props.setDesc(skill)}>
          <td>{skill.name}</td><td>{skill.printApts()}</td><td>{skill.type}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

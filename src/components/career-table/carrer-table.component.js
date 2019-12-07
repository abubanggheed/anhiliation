import React from 'react'
import { Table } from 'reactstrap'
import { careers } from '../../data/career'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>Career</th>
          <th>Bonus Aptitude</th>
          <th>Bonus Aptitude</th>
          <th>Primary Social Skill</th>
        </tr>
      </thead>
      <tbody>
        {careers.map(career => <tr key={career.name}>
          <td>{career.name}</td>
          <td>{career.bApt1.name}</td>
          <td>{career.bApt2.name}</td>
          <td>{career.pSS}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

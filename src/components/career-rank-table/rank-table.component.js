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
          <th>Tier</th>
        </tr>
      </thead>
      <tbody>
        {props.rank.map((asset, index) => <tr key={index}>
          <td>{asset.name}</td>
          <td>{asset.printApts()}</td>
          <td>{asset.printPrereqs ? asset.printPrereqs() : ''}</td>
          <td>{(asset.tier === undefined) ? 'Skill' : asset.tier}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

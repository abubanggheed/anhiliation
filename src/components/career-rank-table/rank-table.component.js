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
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {props.rank.map((asset, index) => <tr key={index} onClick={props.setDesc(
          asset, asset.tier === undefined ? 'skill' : 'talent'
        )} className="clickable">
          <td>{asset.name}</td>
          <td>{asset.printApts()}</td>
          <td>{asset.printPrereqs ? asset.printPrereqs() : ''}</td>
          <td>{(asset.tier === undefined) ? 'Skill' : asset.tier}</td>
          <td>{(asset.tier === undefined ? props.skillCosts :
            props.talentCosts[`tier${asset.tier}`])[asset.apts.reduce((aptCount, apt) => (
            aptCount + (props.apts[apt.name] ? 1 : 0)
          ), 0)]}</td>
        </tr>)}
      </tbody>
    </Table>
  </>
}

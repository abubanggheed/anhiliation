import React from 'react'
import { Table } from 'reactstrap'

export default props => {

  return <>
    <Table dark>
      <thead>
        <tr>
          <th>% of Listed Range</th>
          <th>Pistol Difficulty</th>
          <th>Other Difficulty</th>
          <th>Variance</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Melee</td><td>Standard</td><td>Brutal</td><td>High</td></tr>
        <tr><td>{'< 10'}</td><td>Common</td><td>Common</td><td>Standard</td></tr>
        <tr><td>10 - 50</td><td>Challenging</td><td>Challenging</td><td>Standard</td></tr>
        <tr><td>51 - 100</td><td>Standard</td><td>Standard</td><td>Standard</td></tr>
        <tr><td>101 - 150</td><td>Difficult</td><td>Difficult</td><td>Standard</td></tr>
        <tr><td>151 - 200</td><td>Brutal</td><td>Brutal</td><td>Low</td></tr>
        <tr><td>201 - 250</td><td>Hopeless</td><td>Hopeless</td><td>Low</td></tr>
        <tr><td>251 - 300</td><td>Impossible</td><td>Impossible</td><td>Low</td></tr>
        <tr><td>{'> 300'}</td><td>Ludicrous</td><td>Ludicrous</td><td>Low</td></tr>
      </tbody>
    </Table>
  </>
}

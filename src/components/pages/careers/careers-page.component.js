import React from 'react'
import { Button, Table } from 'reactstrap'
import RankTable from '../../career-rank-table/rank-table.container'

export default props => {

  return <>
    {props.careers.map((career, i) => <div key={career.name}>
      <h4>
        <Button color="secondary" onClick={props.toggleParagraph(career.name)}>{career.name}</Button>
      </h4>
      {props.pars[career.name] && <>
        <p>{props.descriptions[i]}</p>
        {props.paths[i].map((rank, j) => <div key={j}>
          <p><b>Rank {j} -- {props.ranks[i][j]}</b></p>
          <RankTable rank={rank} />
        </div>)}
      </>}
    </div>)}
    <h4>
      <Button color="secondary" onClick={props.toggleParagraph("Universal")}>The Universal Path</Button>
    </h4>
    {props.pars.Universal && <>
      <p>
        Regardless of which career, you have chosen, a high ranking person will be able to pick up all sorts of skills and talents as they branch from their original inclinations.
        The table below shows when skills and talents become available regardless of career.
      </p>
      <Table dark>
        <thead>
          <tr>
            <th>Advances</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {props.uPath.map((advances, index) => <tr key={index}>
            <td>{advances}</td>
            <td>{index}</td>
          </tr>)}
        </tbody>
      </Table>
    </>}
  </>
}
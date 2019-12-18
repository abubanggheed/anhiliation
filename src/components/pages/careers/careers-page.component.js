import React from 'react'
import { Button } from 'reactstrap'
import RankTable from '../../career-rank-table/rank-table.component'

export default props => {

  return <>
    {props.careers.map((career, i) => <div key={career.name}>
      <h4>
        <Button color="secondary" onClick={props.toggleParagraph(career.name)}>{career.name}</Button>
      </h4>
      {props.pars[career.name] && <>
        <p>{props.descriptions[i]}</p>
        {props.paths[i].map((rank, j) => <div key={j}>
          <p><b>Rank {j}</b></p>
          <RankTable rank={rank} />
        </div>)}
      </>}
    </div>)}
  </>
}
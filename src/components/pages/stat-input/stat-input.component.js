import React from 'react'
import { Container } from 'reactstrap'

export default props => {

  return <>
    <Container>
      <h2>Character Input</h2>
      <h6><i>
        This is not your character sheet. Data input here will not persist beyond page refesh.
    </i></h6>
      <h6><i>
        The following values are used for dice rolling logic.
    </i></h6>
      <div>
        {props.charList.map(char => <div key={char.name}>
          <b>{char.name}</b>:{' '}<input
            type="number"
            value={props.stats[char.name]}
            onChange={props.changeStat(char.name)}
          />
        </div>)}
        <div>
          <b>Physical Fatigue</b>:{' '}<input
          type="number"
          value={props.stats.physFatigue}
          onChange={props.changeStat('physFatigue')}
          />
        </div>
        <div>
          <b>Mental Fatigue</b>:{' '}<input
          type="number"
          value={props.stats.menFatigue}
          onChange={props.changeStat('menFatigue')}
          />
        </div>
      </div>
    </Container>
  </>
}

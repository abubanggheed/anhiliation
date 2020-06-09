import React from 'react'
import { Container } from 'reactstrap'

export default props => {

  return <>
    <Container>
      <h2>Damage Roller</h2>
      {JSON.stringify(props)}
    </Container>
  </>
}

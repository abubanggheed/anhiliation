import React from 'react'
import { Container, Input, Label, Row, Col } from 'reactstrap'

export default props => {

  return <>
    <Container>
      <h2>Characteristic Test</h2>
      <Row>
        <Col>
          <Label for="charSelect">Characteristic</Label>
          <Input type="select" id="charSelect">
            {Object.keys(props.stats).map(statKey => <option key={statKey} value={props.stats[statKey]}>
              {statKey}
            </option>)}
          </Input>
        </Col>
        <Col>
          <Label for="diffSelect">Difficulty</Label>
          <Input type="select" id="diffSelect" defaultValue={props.tests[5].name}>
            {props.tests.map(test => <option data={test} key={test.name}>
              {test.name}
            </option>)}
          </Input>
        </Col>
        <Col>
          <Label for="varSelect">Variance</Label>
          <Input type="select" id="varSelect" defaultValue="s">
            <option value={'h'}>High</option>
            <option value={'s'}>Standard</option>
            <option value={'l'}>Low</option>
          </Input>
        </Col>
      </Row>
    </Container>
  </>
}

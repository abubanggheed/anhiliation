import React from 'react'
import { Container, Row, Col, Label, Input, Button, Card } from 'reactstrap'
import RngResults from '../../rng-result/rng-result.container'

export default props => {

  let { dice, offset, numberOfRolls } = props.values
  return <>
    <Container>
      <h2>Generic RNG</h2>
      <Row>
        <Col>
          <Label for="offsetSelector">Offset</Label>
          <Input type="number" id="offsetSelector"
            value={offset}
            onChange={props.changeByValue('offset')}
          />
        </Col>
        <Col>
          <Label for="numberOfRollsSelector">Number of Rolls</Label>
          <Input type="number" id="numberOfRollsSelector"
            value={numberOfRolls}
            onChange={props.changeAdv('numberOfRolls', 1)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button onClick={props.addRngDie}>Add Die</Button>
        </Col>
        <Col>
          <br />
          <Button color="success" onClick={props.rollDice}>Roll</Button>
        </Col>
      </Row>
      <Row>
        {dice.length > 0 && <Col>
          <br />
          {dice.map((die, index) => <Card key={index}>
            <Row>
              <Col>
                <Input type="number"
                  value={die.number}
                  onChange={props.changeListValue('dice', index, 'number', 1)}
                />
              </Col>
                d
                <Col>
                <Input type="number"
                  value={die.max}
                  onChange={props.changeListValue('dice', index, 'max', 1)}
                />
              </Col>
              <Col>
                <Button size="sm" color="danger"
                  onClick={props.removeItem('dice', index)}
                >X</Button>
              </Col>
            </Row>
          </Card>)}
        </Col>}
      </Row>
      <Row>
        <RngResults />
      </Row>
    </Container>
  </>
}

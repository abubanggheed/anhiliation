import React from 'react'
import { Container, Row, Col, Button, Card, Input, Label } from 'reactstrap'
import DamageResults from '../../damage-result/damage-result.container'

export default props => {

  const { values, chars } = props

  return <>
    <Container>
      <h2>Damage Roller</h2>
      <Row>
        <Col>
          <Label for="basicSelector">Base Damage</Label>
          <Input type="number" id="basicSelector"
            value={values.basic}
            onChange={props.changeByValue('basic')}
          />
        </Col>
        <Col>
          <Label for="penSelector">Penetration</Label>
          <Input type="number" id="penSelector"
            value={values.pen}
            onChange={props.changeAdv('pen', 0)}
          />
        </Col>
        <Col>
          <Label for="numSelector">Number of Rolls</Label>
          <Input type="number" id="numSelector"
            value={values.numberOfRolls}
            onChange={props.changeAdv('numberOfRolls', 1)}
          />
        </Col>
        <Col>
          <br/>
          <Button color="success" onClick={props.rollDice}>Roll</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button onClick={props.addDmgDie}>Add Damage Die</Button>
        </Col>
        <Col>
          <br />
          <Button onClick={props.addModifier}>Add Characteristic Modifier</Button>
        </Col>
      </Row>
      <Row>
        {values.dice.length > 0 && <Col>
          <h6>Dice</h6>
          {values.dice.map((die, index) => <Card key={index}>
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
        {values.atts.length > 0 && <Col>
          <h6>Modifiers</h6>
          {values.atts.map((att, index) => <Card key={index}>
            <Row>
              <Col>
                <Input type="select"
                  value={att.weight}
                  onChange={props.changeListValue('atts', index, 'weight')}
                >
                  <option value="0.5">0.5</option>
                  <option value="1">1</option>
                </Input>
              </Col>
              *
              <Col>
                <Input type="select"
                  value={att.charInd}
                  onChange={props.changeListValue('atts', index, 'charInd')}>
                  {chars.map((char, i) => <option key={char.name} value={i}>
                    {char.name}
                  </option>)}
                </Input>
              </Col>
              <Col>
                <Button size="sm" color="danger"
                  onClick={props.removeItem('atts', index)}
                >X</Button>
              </Col>
            </Row>
          </Card>)}
        </Col>}
      </Row>
      <Row>
        <DamageResults />
      </Row>
    </Container>
  </>
}

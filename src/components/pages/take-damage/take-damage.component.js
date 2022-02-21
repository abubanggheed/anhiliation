import React from 'react'
import { Container, Row, Col, Button, Input, Label } from 'reactstrap'
import TakeDamageResult from '../../take-damage-results/take-damage-results.container'

export default props => {

  const { values } = props

  return <>
    <Container>
      <h2>Take Hits</h2>
      <Row>
        <Col>
          <Label for="damageSelector">Damage</Label>
          <Input type="number" id="damageSelector"
            value={values.damage}
            onChange={props.changeAdv('damage', 0)}
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
          <Label for="absSelector">Absorption</Label>
          <Input type="number" id="absSelector"
            value={values.abs}
            onChange={props.changeAdv('abs', 0)}
          />
        </Col>
        <Col>
          <Label for="hitsSelector">Number of Hits</Label>
          <Input type="number" id="hitsSelector"
            value={values.hits}
            onChange={props.changeAdv('hits', 1)}
          />
        </Col>
      </Row>
      <Row>
        <h4>Shield</h4>
      </Row>
      <Row>
        <Col>
          <Label for="chargesSelector">Charges Available</Label>
          <Input type="number" id="chargesSelector"
            value={values.charges}
            onChange={props.changeAdv('charges', 0)}
          />
        </Col>
        <Col>
          <Label for="deflectionSelector">Deflection</Label>
          <Input type="number" id="deflectionSelector"
            value={values.deflection}
            onChange={props.changeAdv('deflection', 0)}
          />
        </Col>
      </Row>
      <Row>
        <p>If you're not wearing a shield, set charges available to 0</p>
      </Row>
      <Row>
      <Col>
          <br />
          <Button color="success" block={true} size="md" onClick={props.calculate}>Calculate</Button>
        </Col>
        <Col>
          <br />
          <Button color="primary" block={true} size="md" onClick={props.save}>Save</Button>
        </Col>
      </Row>
      <Row>
        <TakeDamageResult/>
      </Row>
    </Container>
  </>
}

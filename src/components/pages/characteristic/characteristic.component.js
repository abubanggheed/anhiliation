import React from 'react'
import { Container, Input, Label, Row, Col, Button } from 'reactstrap'
import TestResult from '../../chartest-result/chartest-result.container'

export default props => {

  return <>
    <Container>
      <h2>Characteristic Test</h2>
      <Row>
        <Col>
          <Label check>
            <Input type="checkbox" id="trainedSelect"
              checked={props.values.trained}
              onChange={props.changeByChecked('trained')}>
            </Input>{' '}
            Trained
          </Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="charSelect">Characteristic</Label>
          <Input type="select" id="charSelect"
            value={props.values.charInd}
            onChange={props.changeByValue('charInd')}>
            {props.chars.map((char, i) => <option key={char.name} value={i}>
              {char.name}
            </option>)}
          </Input>
        </Col>
        <Col>
          <Label for="diffSelect">Difficulty</Label>
          <Input type="select" id="diffSelect"
            value={props.values.diffInd}
            onChange={props.changeByValue('diffInd')}>
            {props.tests.map((test, i) => <option value={i} key={test.name}>
              {test.name}
            </option>)}
          </Input>
        </Col>
        <Col>
          <Label for="varSelect">Variance</Label>
          <Input type="select" id="varSelect"
            value={props.values.variance}
            onChange={props.changeByValue('variance')}>
            <option value={'h'}>High</option>
            <option value={'s'}>Standard</option>
            <option value={'l'}>Low</option>
          </Input>
        </Col>
        <Col>
          <Label for="exDice">Extra Dice</Label>
          <Input type="number" id="exDice"
            value={props.values.exDice}
            onChange={props.changeByValue('exDice')}>
          </Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="advantagesSelect">Advantages</Label>
          <Input type="number" id="advantagesSelect"
            value={props.values.advantages}
            onChange={props.changeAdv('advantages')}
          />
        </Col>
        <Col>
          <Label for="disadvantagesSelect">Disadvantages</Label>
          <Input type="number" id="disadvantagesSelect"
            value={props.values.disadvantages}
            onChange={props.changeAdv('disadvantages')}
          />
        </Col>
        <Col>
          <Label for="centeringsSelect">Centerings</Label>
          <Input type="number" id="centeringsSelect"
            value={props.values.centerings}
            onChange={props.changeAdv('centerings')}
          />
        </Col>
        <Col>
          <Label for="ignoredFatigue">Ignored Fatigue</Label>
          <Input type="number" id="ignoredFatigue"
            value={props.values.fatIgnore}
            onChange={props.changeByValue('fatIgnore')}
          >
          </Input>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="basicSelect">Basic Modifier</Label>
          <Input type="number" id="basicSelect"
            value={props.values.basic}
            onChange={props.changeByValue('basic')}
          />
        </Col>
        <Col>
          <Label for="numSelect">Number of Rolls</Label>
          <Input type="number" id="numSelect"
            value={props.values.numberOfRolls}
            onChange={props.changeAdv('numberOfRolls', 1)}
          />
        </Col>
        <Col>
          <p></p>
          <Button color="primary" block={true} size="lg" onClick={props.save}>Save</Button>
        </Col>
        <Col>
          <p></p>
          <Button color="success" block={true} size="lg" onClick={props.makeRoll}>Roll</Button>
        </Col>
      </Row>
      <Row>
        <TestResult />
      </Row>
    </Container>
  </>
}

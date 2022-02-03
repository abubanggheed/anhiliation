import React from 'react'
import { Container, Row, Col, Input } from 'reactstrap'

const SheetBasic = props => {

  const makeInput = key => <Input value={props.basic[key]} onChange={props.editBasicValue(key)} />

  return <>
    <Container>
      <Row>
        <Col>
          <h6><b>Name:</b> {makeInput('name')}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6><b>Species:</b></h6>
          <Input type="select">
            <option></option>
          </Input>
        </Col>
      </Row>
    </Container>
  </>
}

export default SheetBasic

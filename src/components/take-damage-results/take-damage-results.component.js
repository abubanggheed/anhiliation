import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default props => {

  const { result } = props

  return <>
    {result && <>
      <Container>
        <Row>
          <h3>Results</h3>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h5>
                  <b>Wound{result.taken === 1 ? '' : 's'} Lost</b>: {result.taken}
                </h5>
              </Col>
              {result.chargesUsed > 0 && <Col>
                <h5>
                  <b>Charged Used</b>: {result.chargesUsed}
                </h5>
              </Col>}
            </Row>
            <Row>
              <Col><b>Total Damage Absorbed</b>: {result.absorbed}</Col>
              {result.chargesUsed > 0 && <Col><b>Total Damage Deflected</b>: {result.deflected}</Col>}
            </Row>
          </Col>
        </Row>
      </Container>
    </>}
  </>
}
import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

export default props => {

  const { result } = props

  return <>
    {result && <Container>
      <Row>
        <Col>
          <h3>Results</h3> {result.ts.toLocaleTimeString()}
        </Col>
        <Col>
          <h5>{result.dice} + {result.offset}</h5>
        </Col>
      </Row>
      {result.results.map((res, i) => <Row key={i}>
          <Col>
            <Card>
              <CardHeader>
                <h6>{res.total}</h6>
              </CardHeader>
              <CardBody>
                <p>Rolled: {res.diceResults.join(',')}</p>
                <p>Calculation: {res.summary}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>)}
    </Container>}
  </>
}

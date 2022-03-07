import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

export default props => {

  const { result } = props

  return <>
    {result && <>
      <Container>
        <Row>
          <Col>
            <h3>Results</h3> {result.ts.toLocaleTimeString()}
          </Col>
          <Col>
            <Row>
              <h5>
                {result.totalDamage} pen {result.pen} in {result.results.length} hit{result.results.length === 1 ? '' : 's'}
              </h5>
            </Row>
            <Row>
              <h5>
                {` (${result.dice} + ${result.atts.reduce((prev, att) => prev + att, 0)} + ${result.basic} pen ${result.pen})`}
              </h5>
            </Row>
          </Col>
        </Row>
        {result.results.map((res, i) => <Row key={i}>
          <Col>
            <Card>
              <CardHeader>
                <h6>{res.total} pen {res.pen}</h6>
              </CardHeader>
              <CardBody>
                <p>Rolled: {res.diceResults.join(',')}</p>
                <p>Calculation: {res.summary}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>)}
      </Container>
    </>}
  </>
}
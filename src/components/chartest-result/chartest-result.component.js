import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

export default props => {

  const { result } = props
  return <>
    {result && <>
      <Container>
        <Row>
          <Col>
            <h3>Results</h3>
          </Col>
          <Col>
            <h5>
              {result.testName} {result.variance} variance {result.charName} test ({result.dice})
          </h5>
          </Col>
        </Row>
        {result.results.map((result, i) => <Row key={i}>
          <Col>
            <Card>
              <CardHeader>
                <h6>{result.total < 0 ? 'FAILURE ' : 'SUCCESS '}: {result.total} points</h6>
              </CardHeader>
              <CardBody>
                <p>Rolled: {`${result.rawResults}`}</p>
                <p>Kept: {`${result.rollResults}`}</p>
                <p>Calculation: {result.summary}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>)}
      </Container>
    </>}
  </>
}

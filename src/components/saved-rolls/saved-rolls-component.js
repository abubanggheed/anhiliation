import React from 'react'
import { Button, Row, Col, Container } from 'reactstrap'

export default props => {

  const { saved, applySaved, removeItem } = props

  return <div className="description">
    {saved.length > 0 && <>
      <Container>
        <Row>
          <Col>
            <h4>Saved Rolls</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {saved.map((item, i) =>
              <div className="clickable" key={i}
                onClick={applySaved(item)} style={{ backgroundColor: item.color }}>
                <Row key={i}>
                  <Col>
                    <p></p>
                  </Col>
                  <Col>
                    <Button color="danger" onClick={removeItem(i)}>X</Button>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
    }
  </div >
}

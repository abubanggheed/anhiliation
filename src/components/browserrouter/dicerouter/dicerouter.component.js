import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import DiceNav from '../navs/dicenav.component'
import Characteristic from '../../pages/characteristic/characteristic.container'
import Damage from '../../pages/damagerolls/damagerolls.container'
import Rng from '../../pages/rng/rng.container'
import TakeDamage from '../../pages/take-damage/take-damage-container'
import SavedRolls from '../../saved-rolls/saved-rolls-container'

class DiceRouterComponent extends Component {

  render() {
    const { path } = this.props.match
    return <>
      <DiceNav />
      <Container>
        <Row>
          <Col xs="9">
            <Switch>
              <Route
                path={`${path}/damage`}
                component={Damage}
              />
              <Route
                path={`${path}/rng`}
                component={Rng}
              />
              <Route
                path={`${path}/takedamage`}
                component={TakeDamage}
              />
              <Route
                path={`${path}/`}
                component={Characteristic}
              />
            </Switch>
          </Col>
          <Col xs="3">
            <SavedRolls />
          </Col>
        </Row>
      </Container>
    </>
  }
}

export default withRouter(DiceRouterComponent)

import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Introduction from '../../pages/introduction/introduction.container'
import DiceRules from '../../pages/dicerules/dicerules.container'
import RulesNav from '../navs/rulesnav.component'
import CharacterCreation from '../../pages/character-creation/character-creation.container'
import SelfImprovement from '../../pages/self-improvement/self-improvement.container'
import CareerPaths from '../../pages/careers/careers-page.container'
import MaterialPossessions from '../../pages/material-possessions/possessions.container'
import Violence from '../../pages/violence/violence.container'
import Magic from '../../pages/magic/magic.container'

class RulesRouterComponent extends Component {

  render() {
    const { path } = this.props.match
    return <>
      <RulesNav />
      <Container>
        <Row>
          <Col xs="9">
            <Switch>
              <Route
                path={`${path}/dice`}
                component={DiceRules}
              />
              <Route
                path={`${path}/creation`}
                component={CharacterCreation}
              />
              <Route
                path={`${path}/selfimprovement`}
                component={SelfImprovement}
              />
              <Route
                path={`${path}/careerpaths`}
                component={CareerPaths}
              />
              <Route
                path={`${path}/possessions`}
                component={MaterialPossessions}
              />
              <Route
                path={`${path}/violence`}
                component={Violence}
              />
              <Route
                path={`${path}/magic`}
                component={Magic}
              />
              <Route
                path={`${path}/`}
                component={Introduction}
              />
            </Switch>
          </Col>
          <Col xs="3">
            <p>other stuff goes here</p>
          </Col>
        </Row>
      </Container>
    </>
  }
}

export default withRouter(RulesRouterComponent)

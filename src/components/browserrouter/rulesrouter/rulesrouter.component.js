import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Introduction from '../../pages/introduction/introduction.container'
import DiceRules from '../../pages/dicerules/dicerules.container'
import RulesNav from '../navs/rulesnav.component'

class RulesRouterComponent extends Component {

  render() {
    const { path } = this.props.match
    return <>
        <RulesNav />
        <Switch>
          <Route
            path={`${path}/dice`}
            component={DiceRules}
          />
          <Route
            path={`${path}/`}
            component={Introduction}
          />
        </Switch>
  </>
  }
}

export default withRouter(RulesRouterComponent)

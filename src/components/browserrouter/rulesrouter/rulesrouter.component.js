import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Introduction from '../../pages/introduction/introduction.container'
import DiceRules from '../../pages/dicerules/dicerules.container'

class RulesRouterComponent extends Component {

  render() {
    const { path } = this.props.match
    return <>
        <Switch>
          <Route
            path={`${path}/dicerules`}
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

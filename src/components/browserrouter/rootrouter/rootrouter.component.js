import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/home.container'
import RulesRouter from '../rulesrouter/rulesrouter.component'

export default class RootRouterComponent extends Component {

  render() {
    return <>
      <Switch>
        <Route
          path='/rules'
          component={RulesRouter}
        />
        <Route
          path='/'
          component={Home}
        />
      </Switch>
    </>
  }
}

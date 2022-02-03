import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/home.container'
import RulesRouter from '../rulesrouter/rulesrouter.component'
import StatInput from '../../pages/stat-input/stat-input.container'
import DiceRouter from '../dicerouter/dicerouter.component'
import SheetRouter from '../sheetrouter/sheetrouter.component'

export default class RootRouterComponent extends Component {

  render() {
    return <>
      <Switch>
        <Route
          path='/rules'
          component={RulesRouter}
        />
        <Route
          path='/stats'
          component={StatInput}
        />
        <Route
          path='/dice'
          component={DiceRouter}
        />
        <Route
          path='/sheet'
          component={SheetRouter}
        />
        <Route
          path='/'
          component={Home}
        />
      </Switch>
    </>
  }
}

import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import SheetNav from '../navs/sheetnav.component'
import SheetBasic from '../../pages/sheet-basic/sheet-basic.container'

class DiceRouterComponent extends Component {

  render() {
    const { path } = this.props.match
    return <>
      <SheetNav />
      <Switch>
        <Route
          path={`${path}/`}
          component={SheetBasic}
        />
        <Route
          path={`${path}/inventory`}
          component={SheetBasic}
        />
        <Route
          path={`${path}/level`}
          component={SheetBasic}
        />
        <Route
        path={`${path}/system`}
        component={SheetBasic}
      />
      </Switch>
    </>
  }
}

export default withRouter(DiceRouterComponent)

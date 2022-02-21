import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'reactstrap'


class DiceNav extends Component {

  render() {
    const { path } = this.props.match
    return <>
      <Navbar color="faded" expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to={`${path}`}>
              <Button color="link">Characteristic Test</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/damage`}>
              <Button color="link">Damage Rolls</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/rng`}>
              <Button color="link">Generic RNG</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/takedamage`}>
              <Button color="link">Take Hits</Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  }
}

export default withRouter(DiceNav)

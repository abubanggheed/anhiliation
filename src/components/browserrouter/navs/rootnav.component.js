import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'reactstrap'

class RootNav extends Component {

  render() {
    return <>
      <Navbar color="dark" expand="md">
        <Link to="/">
          <Button color="danger">{'|  |'}</Button>
        </Link>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/rules">
              <Button color="link">Rules</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/stats">
              <Button color="link">Char Input</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/dice">
              <Button color="link">Dice</Button>
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link to="/sheet">
              <Button color="link">Sheet</Button>
            </Link>
          </NavItem> */}
        </Nav>
      </Navbar>
    </>
  }
}

export default RootNav

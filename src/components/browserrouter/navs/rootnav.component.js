import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'reactstrap'

class RootNav extends Component {

  render() {
    return <>
      <Navbar color="dark">
        <Link to="/">
          <Button color="danger">{'|  |'}</Button>
        </Link>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/rules">
              <Button color="link">Rules</Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  }
}

export default RootNav

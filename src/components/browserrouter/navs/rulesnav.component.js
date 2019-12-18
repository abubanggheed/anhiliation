import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'reactstrap'

class RulesNav extends Component {

  render() {
    const { path } = this.props.match
    return <>
      <Navbar color="faded" expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to={`${path}`}>
              <Button color="link">Intro</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/dice`}>
              <Button color="link">Dice Rules</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/creation`}>
              <Button color="link">Character Creation</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/selfimprovement`}>
              <Button color="link">Self Improvement</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${path}/careerpaths`}>
              <Button color="link">Career Paths</Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  }
}

export default withRouter(RulesNav)

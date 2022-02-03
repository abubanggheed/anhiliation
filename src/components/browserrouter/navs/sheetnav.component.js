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
              <Button color="link">Basic</Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  }
}

export default withRouter(DiceNav)

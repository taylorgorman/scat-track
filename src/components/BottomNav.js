import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BottomNav extends React.PureComponent {

  render() { return (
  <React.Fragment>

    <Nav as="nav" className="bottom-nav fixed-bottom" justify defaultActiveKey="/">
      <Nav.Item><Nav.Link as={Link} href="/" to="/">Dashboard</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link as={Link} href="/craps/new" to="/craps/new">New Poo</Nav.Link></Nav.Item>
    </Nav>

  </React.Fragment>
  ); }

}



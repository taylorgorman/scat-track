import React from 'react';
import { Container } from 'react-bootstrap';

export default class Header extends React.PureComponent {

  render() { return (
    <header className="fixed-top" style={this.props.style}>
    <Container>
      <h1>{ this.props.title }</h1>
    </Container>
    </header>
  ); }

}

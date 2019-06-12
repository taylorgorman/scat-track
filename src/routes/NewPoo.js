import React from 'react';
import { Container } from 'react-bootstrap';
import ButtonClose from '../components/ButtonClose';
import Header from '../components/Header';

export default class NewPoo extends React.PureComponent {

  render() { return (
  <React.Fragment>

    <Header title="New Poo" style={{ backgroundColor: 'transparent' }} />
    <Container>
      <p>Time</p>
      <p>Duration</p>
    </Container>
    <ButtonClose />

  </React.Fragment>
  ); }

}

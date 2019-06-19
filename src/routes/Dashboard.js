import React from 'react';
import Header from '../components/Header';
import ButtonAddNew from '../components/ButtonAddNew';
import firebase from '../utilities/firebase';
import { Container, Table, Form, Button, Col } from 'react-bootstrap';

export default class Dashboard extends React.PureComponent {

  state = {
    tests: [],
    message: '',
  };

  firestore = firebase.firestore();

  handleTestForm = ( event ) => {
    event.preventDefault();
    this.saveTest();
  }

  saveTest = () => {

    const resetMessage = () => {
      this.setState({
        message: '',
      });
    };

    this.firestore.collection('tests').add({
      date: new Date,
      message: this.state.message,
      version: 0.3,
    })
    .then(function(docRef) {
      resetMessage();
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
  }

  render() { return (
  <React.Fragment>

    <Header title="Doo List" />

    <Container>

      <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Timestamp</th>
          <th>Version</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
      { this.state.tests.map( ( test, key ) => {
        let date = new Date(test.date.seconds * 1000);
        return (
          <tr key={ key }>
            <td>{ test.id }</td>
            <td>{ ( date.getMonth() + 1 ) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() }</td>
            <td>{ test.version }</td>
            <td>{ test.message }</td>
          </tr>
        );
      } ) }
      </tbody>
      </Table>

      <h3>Add new message</h3>
      <Form onSubmit={ this.handleTestForm }>
        <Form.Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Message"
            name="message"
            value={ this.state.message }
            onChange={ (event) => this.setState({message:event.target.value}) }
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">Save</Button>
        </Col>
        </Form.Row>
      </Form>

    </Container>

    <ButtonAddNew />

  </React.Fragment>
  ); }

  componentDidMount() {

    this.firestore.collection( 'tests' ).orderBy('date').get().then( ( querySnapshot ) => {

      // Collect
      let tests = [];
      querySnapshot.forEach( ( doc ) => {
        tests.push({
          id: doc.id,
          ...doc.data()
        });
      } );

      // Save
      this.setState({ tests });

    } );

  }

}

import React from 'react';
import Header from '../components/Header';
import ButtonAddNew from '../components/ButtonAddNew';
import firebase from '../utilities/firebase';
import { Container, Table } from 'react-bootstrap';

export default class Dashboard extends React.PureComponent {

  state = {
    tests: [],
  };

  firestore = firebase.firestore();

  render() {

    //
    //firestore.collection('tests').add({
    //    date: new Date,
    //    message: 'wow that just worked',
    //    version: 0.2
    //})
    //.then(function(docRef) {
    //    console.log("Document written with ID: ", docRef.id);
    //})
    //.catch(function(error) {
    //    console.error("Error adding document: ", error);
    //});

    ;


  return (
  <React.Fragment>

    <Header title="Doo List" />

    <Container>

      <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Timestamp</th>
          <th>Version</th>
          <th>Name</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
      { this.state.tests.map( ( test, key ) => {
        let date = new Date(test.date.seconds * 1000);
        console.log('date',date);
        return (
        <tr key={ key }>
          <td>{ test.id }</td>
          <td>{ ( date.getMonth() + 1 ) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() }</td>
          <td>{ test.version }</td>
          <td>{ test.name }</td>
          <td>{ test.message }</td>
        </tr>
        );
      } ) }
      </tbody>
      </Table>

    </Container>

    <ButtonAddNew />

  </React.Fragment>
  ); }

  componentDidMount() {

    this.firestore.collection( 'tests' ).get().then( ( querySnapshot ) => {

      // Collect
      let tests = [];
      querySnapshot.forEach( ( doc ) => {
        tests.push({
          id: doc.id,
          ...doc.data()
        });
      } );

      console.log('tests',tests);

      // Save
      this.setState({ tests });

    } );

  }

}

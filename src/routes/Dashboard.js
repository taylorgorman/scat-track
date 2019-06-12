import React from 'react';
import Header from '../components/Header';
import ButtonAddNew from '../components/ButtonAddNew';

export default class Dashboard extends React.PureComponent {

  render() { return (
  <React.Fragment>

    <Header title="Doo List" />
    <ButtonAddNew />

  </React.Fragment>
  ); }

}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import NewPoo from './routes/NewPoo';
import './App.scss';

export default class App extends React.PureComponent {

  render() { return (
  <BrowserRouter>

    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/new" component={NewPoo} />
    </Switch>

  </BrowserRouter>
  ); }

}

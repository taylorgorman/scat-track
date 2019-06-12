import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import CreateCrap from './routes/CreateCrap';

export default class App extends React.PureComponent {

  render() { return (
  <BrowserRouter>

    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/" component={CreateCrap} />
    </Switch>

  </BrowserRouter>
  ); }

}

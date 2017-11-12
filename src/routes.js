import React from 'react';
import { Router, Route } from 'react-router';

import Game from './components/Game';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Game} />
  </Router>
);

export default Routes;
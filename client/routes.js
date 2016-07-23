import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/app.component';
import CompanyComponent from './components/company.component';

export default (
  <Route path="/" component={AppComponent}>
    <Route path="home" component={AppComponent} />
    <Route path="company" component={CompanyComponent} />
  </Route>
);

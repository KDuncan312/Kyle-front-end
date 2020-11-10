import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Customers from '../views/Customers';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Products from '../views/Products';
import Register from '../views/Register';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/admin/products" component={Products} />
    <Route exact path="/admin/customers" component={Customers} />
  </Switch>
);

export default Routes;

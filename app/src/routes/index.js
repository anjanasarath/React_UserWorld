import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import AddUser from '../components/addUser';
import Home from '../components/home';

const Routes = (props) => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/addUser" component={AddUser}/>
    </div>
  </ConnectedRouter>
);
export default Routes;

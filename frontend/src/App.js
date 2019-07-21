import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/scss/app.scss';
import Index from './views/index';
import ItemDescription from './views/item-description';
import ItemList from './views/item-list';

export default class App extends Component {
  render = () => (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/items" component={ItemList}/>
            <Route exact path="/items/:id" component={ItemDescription}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

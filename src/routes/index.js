import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Custom Imports
import { HOME, CARTPAGE, PRODUCTDETAILS } from './route';
import { Home, ProductDetails, CartPage } from '../screens';

const MainRouter = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={HOME} component={Home} exact />
          <Route path={PRODUCTDETAILS} component={ProductDetails} exact />
          <Route path={CARTPAGE} component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;

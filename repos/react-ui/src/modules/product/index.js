import React from 'react';
import { Route } from 'react-router-dom';
import { RouteEnum } from 'enums';
import { ProductListContainer } from 'modules/product/list';
const routes = {
  PRODUCT_LIST: RouteEnum.DEFAULT
};

const webRouter = () => ([
  <Route key="product_1" exact path={routes.PRODUCT_LIST} component={(ProductListContainer)} />,
]);

export { webRouter, routes };

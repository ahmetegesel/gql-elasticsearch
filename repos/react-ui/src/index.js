import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Switch } from 'react-router';
import { DefaultLayout } from 'layouts';
import { history, client } from 'lib';
import store from 'store';
import { webRouter as productRouter } from 'modules/product';

import 'assets/styles/index.scss';
import { ApolloProvider } from '@apollo/react-hooks';

const defaultRoute = '/';

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <DefaultLayout>
          <Switch>
            {productRouter()}
            <Redirect from="*" to={defaultRoute} />
          </Switch>
        </DefaultLayout>
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

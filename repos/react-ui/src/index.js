import {ConnectedRouter} from "connected-react-router";
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from "react-redux";
import {Redirect, Switch} from "react-router";
import { DefaultLayout } from "layouts";
import { history } from 'lib';
import store from 'store';
import { webRouter as productRouter } from 'modules/product';

import 'assets/styles/index.scss';

const defaultRoute = '/';

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <DefaultLayout>
                <Switch>
                    {productRouter()}
                    <Redirect from="*" to={defaultRoute} />
                </Switch>
            </DefaultLayout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

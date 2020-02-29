import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { history as appHistory } from 'lib';
import { reducers } from './reducers';

const createRootReducer = (history) => combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(
  createRootReducer(appHistory), {}, composeEnhancers(applyMiddleware(routerMiddleware(appHistory), thunk)),
);

export default store;

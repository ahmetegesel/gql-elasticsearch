// @flow
import { getAction } from './getAction';

export const dispatchAction = dispatch => (actionType: String, payload: Object) =>
  dispatch(getAction(actionType, payload));

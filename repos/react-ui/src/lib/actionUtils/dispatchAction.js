import {getAction} from "./getAction";

export const dispatchAction = (dispatch) => (actionType: String, payload: Object, meta: Object) => dispatch(
    getAction(actionType, payload, meta)
);

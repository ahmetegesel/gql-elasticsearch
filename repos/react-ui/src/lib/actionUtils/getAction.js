// @flow
export const getAction = (actionType: String, payload: Object, meta: Object) => {
  return {
    type: actionType,
    payload,
    meta
  };
};

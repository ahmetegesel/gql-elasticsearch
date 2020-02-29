// @flow
export const getAction = (actionType: String, payload: Object) => {
  return {
    type: actionType,
    payload
  };
};

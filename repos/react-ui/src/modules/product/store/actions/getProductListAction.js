/**
 * @summary Gets product list from network and dispatches to reducer
 * @return dispatched product list
 * * */
import { _productMockData } from 'assets/mockData';
import { dispatchAction } from 'lib/actionUtils';
import { SET_PRODUCT_LIST } from 'modules/product/store/actionTypes';

export const getProductListAction = () => {
  return async dispatch => {
    // api here in replace of {_productMockData}.
    const result = _productMockData;
    return dispatchAction(dispatch)(SET_PRODUCT_LIST, result);
  };
};

import {
  SET_PRODUCT_LIST,
} from './actionTypes';

const defaultState = {
  productList: [],
  categoryList: [],
  selectedCategory: ''
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;

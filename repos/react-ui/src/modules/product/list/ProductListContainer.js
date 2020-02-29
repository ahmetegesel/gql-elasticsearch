import { ProductListTable } from 'modules/product/list/productListTable/ProductListTable';
import { getProductListAction, setProductListAction } from 'modules/product/store/actions';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductListContainer extends React.PureComponent {
  componentDidMount() {
    const { getProductList } = this.props;
    getProductList().then(() => {
      console.info('call is done');
    });
  }

  render() {
    const { productList } = this.props;
    return (
      <>
        <ProductListTable
          productList={productList.map(product => ({
            key: product.id,
            id: product.id,
            brand: product.brand.name,
            name: product.name,
            inStock: product.inStock,
            price: product.price
          }))}
        />
      </>
    );
  }
}
ProductListContainer.propTypes = {
  getProductList: PropTypes.func.isRequired,
  productList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  productList: state.product.productList
});

const actions = {
  getProductList: getProductListAction,
  setProductList: setProductListAction
};
export default connect(mapStateToProps, actions)(ProductListContainer);

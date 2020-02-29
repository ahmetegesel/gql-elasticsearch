import { Button } from 'antd';
import { setProductListAction } from 'modules/product/store/actions';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProductListContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {}

  onClick() {
    const { setProductList, productList } = this.props;
    setProductList([...productList, { name: 'ali' }]);
  }

  render() {
    const { productList } = this.props;
    console.log(productList);
    return (
      <>
        <Button onClick={this.onClick}>click me</Button>
      </>
    );
  }
}
ProductListContainer.propTypes = {
  setProductList: PropTypes.func.isRequired,
  productList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  productList: state.product.productList
});

const actions = {
  setProductList: setProductListAction
};
export default connect(mapStateToProps, actions)(ProductListContainer);

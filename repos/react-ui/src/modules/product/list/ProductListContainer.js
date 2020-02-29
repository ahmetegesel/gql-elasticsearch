import React from 'react';
import { connect } from 'react-redux';

class ProductListContainer extends React.Component {

  render() {
     return (
      <>
        ProductListContainer
      </>
    );
  }
}
ProductListContainer.propTypes = {

};

const mapStateToProps = () => ({
 // props here..
});

const actions = {

};
export default connect(mapStateToProps, actions)(ProductListContainer);

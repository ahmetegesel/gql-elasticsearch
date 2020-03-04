import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { gql } from 'apollo-boost';
import { getTableColumnDefs } from './getTableColumnDefs';

const productListGql = gql`
  {
    products {
      id
      name
    }
  }
`;
export const ProductListTable = props => {
  const { loading, error, data } = useQuery(productListGql);

  console.log(loading, error, data);
  const { productList } = props;
  return (
    <>
      <Table columns={getTableColumnDefs()} dataSource={productList} />
    </>
  );
};

ProductListTable.propTypes = {
  productList: PropTypes.array.isRequired
};

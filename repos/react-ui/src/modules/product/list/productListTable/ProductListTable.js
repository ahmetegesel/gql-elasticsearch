import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import { getTableColumnDefs } from './getTableColumnDefs';

export const ProductListTable = props => {
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

import { Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

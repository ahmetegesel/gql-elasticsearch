import { Button } from 'antd';
import React from 'react';
import { SmileTwoTone, FrownTwoTone, SearchOutlined } from '@ant-design/icons';

export const getTableColumnDefs = () => {
  const onDetailClick = param => {
    console.log(param);
  };
  return [
    { title: 'Brand', dataIndex: 'brand' },
    { title: 'Name', dataIndex: 'name' },
    {
      title: 'In Stock',
      width: '100px',
      dataIndex: 'inStock',
      render: params => {
        return params ? <SmileTwoTone /> : <FrownTwoTone twoToneColor="#eb2f96" />;
      }
    },
    { title: 'Price', width: '100px', dataIndex: 'price' },
    {
      title: 'Detail',
      dataIndex: 'detail',
      width: '100px',
      render: (field, data) => {
        return (
          <Button
            onClick={() => {
              return onDetailClick(data);
            }}
            type="button"
          >
            <SearchOutlined />
            Detail
          </Button>
        );
      }
    }
  ];
};

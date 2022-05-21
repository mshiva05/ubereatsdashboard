import React from 'react'
import { Card, Table, Tag } from 'antd'
import ordersHistory from '../../assests/data/orders-history.json'
function OrderHistory() {
  const renderOrderStatus = (orderStatus) => {
    if (orderStatus === 'Delivered') {
      return <Tag color={'green'}>{orderStatus}</Tag>
    } else {
      return <Tag color={'red'}>{orderStatus}</Tag>
    }
  }
  const tableColumns = [
    {
      title: 'Order-ID',
      dataIndex: 'orderID',
      key: 'orderID',
    },

    {
      title: 'Delivery Address',
      dataIndex: 'deliveryAddress',
      key: 'deliveryAddress',
    },

    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `Rs. ${price}`,
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: renderOrderStatus,
    },
  ]
  return (
    <Card title={'Previous Orders'} style={{ margin: 20 }}>
      <Table
        dataSource={ordersHistory}
        columns={tableColumns}
        rowKey="orderID"
      ></Table>
    </Card>
  )
}

export default OrderHistory
